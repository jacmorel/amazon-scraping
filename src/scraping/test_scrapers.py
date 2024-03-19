import itertools
import logging as log
import math
import os
from datetime import datetime
from unittest.mock import patch, call

import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.select import Select

from scraping.model import Transaction, Order, OrderStatus
from scraping.scrapers import OrderHistory, OrderDetail, PageIterator, Login, CAPTCHA1, CAPTCHA2, Scraper
from scraping.utils import create_driver_with_default_options
from utils.objects import recursive_vars

# log.basicConfig(level=log.DEBUG)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

ORDER_HISTORY_HOME = "order_history_home.html"
ORDER_HISTORY_2023_PAGE_1 = "order_history_2023_p1.html"
ORDER_HISTORY_2023_PAGE_2 = "order_history_2023_p2.html"
ORDER_HISTORY_2023_PAGE_27 = "order_history_2023_p27.html"
ORDER_HISTORY_2024_PAGE_1 = "order_history_2024_p1.html"
ORDER_HISTORY_2024_PAGE_2 = "order_history_2024_p2.html"
ORDER_HISTORY_2024_PAGE_7 = "order_history_2024_p7.html"


def date(month, day):
    return datetime(2024 if month < 4 else 2023, month, day).date()


class OrderMother:
    def __init__(self, start_number):
        self.start_number = start_number
        self.count = 0

    def new(self, ordered_dates):
        if not isinstance(ordered_dates, list):
            ordered_dates = [ordered_dates]
        return [self.new_order(date(d[0], d[1]), d[2] if len(d) > 2 else None) for d in ordered_dates]

    def new_order(self, ordered_date, invoice_link):
        order_number = f"345-1234567-0000{self.start_number:03}"
        order = Order(order_number,
                      ordered_date,
                      f"https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o0{self.count}?ie=UTF8&orderID={order_number}",
                      invoice_link if invoice_link else f"https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o0{self.count}?ie=UTF8&orderID={order_number}")
        self.start_number += 1
        self.count = (self.count + 1) % 10
        return order


ORDERS_2023_PAGE_1 = OrderMother(1).new([
    (12, 31), (12, 30), (12, 29), (12, 29), (12, 29), (12, 22), (12, 22), (12, 13), (12, 13), (12, 11)])

ORDERS_2023_PAGE_2 = OrderMother(11).new([
    (12, 10), (12, 10), (12, 4), (12, 3), (12, 3), (11, 27), (11, 27), (11, 27, "javascript:void(0)"), (11, 26), (11, 26)])

ORDERS_2023_PAGE_27 = OrderMother(21).new([
    (4, 24), (4, 18), (4, 18), (4, 18), (4, 18), (4, 10), (4, 4), (4, 2)])

ORDERS_2024_PAGE_1 = OrderMother(29).new([
    (3, 16), (3, 11), (3, 10), (3, 7), (3, 6), (3, 5), (3, 3), (3, 3), (3, 2), (3, 1)])

ORDERS_2024_PAGE_2 = OrderMother(39).new([
    (2, 29), (2, 28), (2, 28), (2, 26), (2, 26), (2, 25), (2, 23), (2, 22), (2, 21), (2, 21)])

ORDERS_2024_PAGE_7 = OrderMother(49).new([
    (1, 5), (1, 5), (1, 5), (1, 5), (1, 3), (1, 1)])

ORDERS_2023 = list(itertools.chain(*[ORDERS_2023_PAGE_1, ORDERS_2023_PAGE_2, ORDERS_2023_PAGE_27]))
ORDERS_2024 = list(itertools.chain(*[ORDERS_2024_PAGE_1, ORDERS_2024_PAGE_2, ORDERS_2024_PAGE_7]))
ORDERS_2023_2024 = list(itertools.chain(*[ORDERS_2023, ORDERS_2024]))

@pytest.fixture
def driver():
    driver = create_driver_with_default_options()
    yield driver
    driver.quit()


@pytest.fixture
def order(order_number="1", ordered_date=None):
    return Order(order_number, ordered_date, None, None)


@pytest.mark.parametrize("link, captcha, img", [
    ["login_captcha_characters.html", CAPTCHA1,
     "test_pages/login/login_captcha_characters_files/Captcha_wrmbbboksl.jpg"],
    ["login_captcha_puzzle.html", CAPTCHA2,
     "test_pages/login/login_captcha_puzzle_files/5542c35e655e49f8bc92bebdc86ffcd7.jpg"],
])
def test_login_captcha(driver, link, captcha, img):
    class MockDriver:
        def __init__(self):
            self.quit_called = False

        def get(self, page):
            assert page.endswith(img)

        def quit(self):
            self.quit_called = True

    load_page(driver, link)

    mock_driver = MockDriver()
    with patch.object(Login, "create_driver", side_effect=[mock_driver]) as mock_create_driver, \
            patch(target="builtins.input", return_value='John Doe') as mock_input, \
            patch(target="selenium.webdriver.remote.webelement.WebElement.send_keys") as mock_send_keys, \
            patch(target="selenium.webdriver.remote.webelement.WebElement.submit") as mock_submit, \
            patch(target="scraping.scrapers.Login.wait_for_input"):
        login = Login(driver, "", "")
        login.handle_captcha(*captcha)

        mock_create_driver.assert_called_once()
        mock_input.assert_called_once()
        mock_send_keys.assert_called_once_with("John Doe")
        mock_submit.assert_called_once()
        assert mock_driver.quit_called


@pytest.mark.parametrize("current, next", [
    [ORDER_HISTORY_2024_PAGE_1,
     "https://www.amazon.com/your-orders/orders?timeFilter=year-2024&startIndex=10&ref_=ppx_yo2ov_dt_b_pagination_1_2"],
    [ORDER_HISTORY_2024_PAGE_2,
     "https://www.amazon.com/your-orders/orders?timeFilter=year-2024&startIndex=20&ref_=ppx_yo2ov_dt_b_pagination_2_3"],
])
def test_page_iterator(driver, current, next):
    load_page(driver, current)

    with patch.object(PageIterator, "get_page", return_value=None) as mock_get:
        it = PageIterator(OrderHistory(driver))
        it.__iter__()
        it.__next__()

        mock_get.assert_called_once_with(next, None)


def test_page_iterator_on_last_page(driver):
    load_page(driver, ORDER_HISTORY_2024_PAGE_7)

    with pytest.raises(StopIteration):
        it = PageIterator(OrderHistory(driver))
        it.__iter__()
        it.__next__()


filter_count = 0


def handle_filter_submit(obj):
    global filter_count
    if filter_count == 0:
        assert_filter_and_refresh_page(obj, "2023", ORDER_HISTORY_2023_PAGE_1)
        filter_count += 1
    elif filter_count == 1:
        assert_filter_and_refresh_page(obj, "2024", ORDER_HISTORY_2024_PAGE_1)
        filter_count += 1
    else:
        raise AssertionError("Unexpected filter submit")


def assert_filter_and_refresh_page(obj, filter_text, page):
    option = Select(obj).first_selected_option
    assert option is not None and option.text == filter_text
    load_page(obj.parent, page)


def test_order_history_get_all_orders(driver):
    with patch.object(PageIterator,
                      "get_next_page_link",
                      side_effect=[get_test_page_link(ORDER_HISTORY_2023_PAGE_2),
                                   get_test_page_link(ORDER_HISTORY_2023_PAGE_27),
                                   None,
                                   get_test_page_link(ORDER_HISTORY_2024_PAGE_2),
                                   get_test_page_link(ORDER_HISTORY_2024_PAGE_7),
                                   None
                                   ]), \
            patch.object(OrderDetail, "populate") as mock_populate, \
            patch.object(WebElement, "submit", new=handle_filter_submit) as mock_submit:

        order_history = OrderHistory(driver)
        order_history.order_history_home = get_test_page_link(ORDER_HISTORY_HOME)

        orders = order_history.get_all_orders(["2023", "2024"], True)

        assert_object_arrays_equal(ORDERS_2023_2024, orders, True)

        assert [args[0][0].number for args in mock_populate.call_args_list] == [f'345-1234567-{i:07}' for i in range(1, 55)]


def test_order_history_get_orders_from_history_iterate_through_all_pages(driver):
    load_page(driver, ORDER_HISTORY_2024_PAGE_1)

    with patch.object(PageIterator,
                      "get_next_page_link",
                      side_effect=[get_test_page_link(ORDER_HISTORY_2024_PAGE_2),
                                   get_test_page_link(ORDER_HISTORY_2024_PAGE_7)]):
        orders = OrderHistory(driver).get_orders_from_history()

        assert_object_arrays_equal(ORDERS_2024, orders, True)


def test_order_history_get_current_page_orders(driver):
    load_page(driver, ORDER_HISTORY_2024_PAGE_1)

    orders = OrderHistory(driver).get_current_page_orders()

    assert_object_arrays_equal(ORDERS_2024_PAGE_1, orders)


def test_order_details_populate_address(driver, order):
    body = load_page(driver, ['order_details', 'shipping_address.html'])
    get_order_detail(driver, order).populate_address(body)

    assert vars(order.shipping_address) == {'street': '1111 MAIN ST',
                                            'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                                            'country': 'United Kingdom'
                                            }
    assert order.recipient == 'Hermione Granger'


def get_order_detail(driver, order):
    order_detail = OrderDetail(driver)
    order_detail.order = order
    return order_detail


@pytest.mark.parametrize("file, expected", [
    ['payment_method.html', "0001"],
    ['payment_method_gift_card.html', "Gift Card"],
    ['payment_method_with_gift_card_prompt.html', "9921"],
    ['payment_method_gift_card_balance.html', "Gift Card Balance"],
])
def test_order_details_populate_payment(driver, order, file, expected):
    body = load_page(driver, ['order_details', file])

    get_order_detail(driver, order).populate_payment_method(body)

    assert order.payment_credit_card == expected


def assert_float_equals(actual, expected):
    assert math.isclose(actual, expected, rel_tol=1e-7)


def test_order_details_populate_summary(driver, order):
    body = load_page(driver, ['order_details', 'order_summary.html'])

    get_order_detail(driver, order).populate_payment_summary(body)

    assert_float_equals(order.items_subtotal_amount, 2430.00)
    assert_float_equals(order.shipping_amount, 2.00)
    assert_float_equals(order.tax_amount, 18.98)
    assert_float_equals(order.gift_card_amount, 249.98)
    assert_float_equals(order.grand_total_amount, 1.00)
    assert_float_equals(order.items_refund_amount, 230.00)
    assert_float_equals(order.tax_refund_amount, 17.98)
    assert_float_equals(order.total_refund_amount, 248.98)
    assert_float_equals(order.coupon_savings, 8.44)  # testing addition of 2 coupons
    assert_float_equals(order.subscription_savings, 0.92)
    assert_float_equals(order.shipping_savings, 2.99)
    assert_float_equals(order.rewards_amount, 57.03)
    assert_float_equals(order.courtesy_credit_amount, 10.00)


def test_order_details_populate_summary_refund(driver, order):
    set_logging_level(log.INFO)

    body = load_page(driver, ['order_details', 'order_summary_refund_section.html'])

    get_order_detail(driver, order).populate_payment_summary(body)

    assert order.items_refund_amount == 230.00
    assert order.tax_refund_amount == 17.98
    assert order.total_refund_amount == 248.98


def test_order_details_populate_transactions(driver, order):
    body = load_page(driver, ['order_details', 'transactions.html'])

    get_order_detail(driver, order).populate_transactions(body)

    assert_object_arrays_equal(order.transactions, [
        Transaction(date(2, 25), 2245.59, None),
        Transaction(date(2, 14), -55.04, '0002'),
        Transaction(date(2, 14), -10.81, '0002'),
    ])


@pytest.mark.parametrize("line, expected", [
    ["Refund: Completed February 25, 2024 - $22.59",
     "Transaction(date=2024-02-25, amount=22.59, cc_last_4=None)"],
    ["Refund:  25, 2024 - $22.59",
     "Transaction(date=None, amount=0, cc_last_4='Unparseable refund: Refund:  25, 2024 - $22.59')"]
])
def test_extract_refund(driver, order, line, expected):
    order_detail = get_order_detail(driver, order)
    tx = order_detail.extract_refund(line)
    assert expected == str(tx)


@pytest.mark.parametrize("line, expected", [
    ["Items shipped: February 14, 2024 - Visa ending in 0002: $55.04",
     "Transaction(date=2024-02-14, amount=-55.04, cc_last_4='0002')"],
    ["February 14, 2024 - Visa ending in 0001: $1,235.05",
     "Transaction(date=2024-02-14, amount=-1235.05, cc_last_4='0001')"],
    ["February 14, 2024 - Visa ending in : $55.04",
     "Transaction(date=None, amount=0, cc_last_4='Unparseable payment: February 14, 2024 - Visa ending in : $55.04')"]
])
def test_extract_payment(driver, order, line, expected):
    order_detail = get_order_detail(driver, order)
    tx = order_detail.extract_payment(line)
    assert expected == str(tx)


@pytest.mark.parametrize("link, expected", [
    ['order_details_1_item_not_shipped.html', {
        'number': '1',
        'details_link': 'file:///Users/jacques/dev/amazon-scraping/test_pages/order_details/order_details_1_item_not_shipped.html',
        'invoice_link': None, 'shipping_address': {'street': '1111 MAIN ST',
                                                   'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                                                   'country': 'United Kingdom'},
        'recipient': 'Hermione Granger',
        'payment_credit_card': '1001',
        'items_subtotal_amount': 18.39,
        'shipping_amount': 0.0,
        'total_before_tax_amount': 8.27,
        'tax_amount': 0.0,
        'grand_total_amount': 8.27,
        'gift_card_amount': None,
        'items_refund_amount': None,
        'tax_refund_amount': None,
        'total_refund_amount': None,
        'transactions': None,
        'coupon_savings': 9.2,
        'subscription_savings': 0.92,
        'courtesy_credit_amount': None,
        'rewards_amount': None,
        'status': OrderStatus.PROCESSING,
        'ordered_date': None,
        'shipping_savings': None}],
    ['order_details_3_items_received_1_refunded_2_txs_coupon.html', {
        'coupon_savings': 5.22,
        'details_link': 'file:///Users/jacques/dev/amazon-scraping/test_pages/order_details/order_details_3_items_received_1_refunded_2_txs_coupon.html',
        'gift_card_amount': None,
        'grand_total_amount': 65.85,
        'invoice_link': None,
        'items_refund_amount': None,
        'items_subtotal_amount': 66.06,
        'number': '1',
        'payment_credit_card': '0002',
        'recipient': 'Harry Potter',
        'shipping_address': {'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                             'country': 'United Kingdom',
                             'street': '4 PRIVET DRIVE'},
        'shipping_amount': 2.99,
        'subscription_savings': None,
        'shipping_savings': 2.99,
        'tax_amount': 5.01,
        'tax_refund_amount': None,
        'total_before_tax_amount': 60.84,
        'total_refund_amount': 22.59,
        'courtesy_credit_amount': None,
        'rewards_amount': None,
        'status': OrderStatus.PROCESSING,
        'ordered_date': None,
        'transactions': [{'amount': 22.59,
                          'cc_last_4': None,
                          'date': date(2, 25)},
                         {'amount': -55.04,
                          'cc_last_4': '0002',
                          'date': date(2, 14)},
                         {'amount': -10.81,
                          'cc_last_4': '0002',
                          'date': date(2, 14)}]}
     ],
])
def test_order_details_populate(driver, order, link, expected):
    order.details_link = get_test_page_link(link)

    OrderDetail(driver).populate(order)

    assert recursive_vars(order) == expected


def load_page(driver, relative_path_elements):
    link = get_test_page_link(relative_path_elements)
    log.info("Loading page %s", link)
    driver.get(link)
    return driver.find_element(By.TAG_NAME, 'body')


def get_test_page_link(relative_path_elements):
    if isinstance(relative_path_elements, str):
        relative_path_elements = prepend_test_directory(relative_path_elements)

    path_elements = ['test_pages'] + relative_path_elements
    return f'file://{os.path.join(BASE_DIR, *path_elements)}'


def prepend_test_directory(file_name: str):
    pages = ["order_details", "order_history", "login"]
    for page in pages:
        if file_name.startswith(page):
            return [page, file_name]
    raise Exception("type of screen not understood")


def assert_object_arrays_equal(expected, actual, ignore_none=False):
    assert [recursive_vars(o, ignore_none) for o in actual] == [recursive_vars(o, ignore_none) for o in expected]


def test_recursive_vars():
    order = Order("1", None, "details", "invoice")
    order.transactions = [Transaction("1/1/1", 1.0, "0001"),
                          Transaction("1/2/1", 2.0, "0002")]

    assert recursive_vars(order) == {'coupon_savings': None,
                                     'details_link': 'details',
                                     'ordered_date': None,
                                     'gift_card_amount': None,
                                     'grand_total_amount': None,
                                     'invoice_link': 'invoice',
                                     'items_refund_amount': None,
                                     'items_subtotal_amount': None,
                                     'number': '1',
                                     'status': OrderStatus.PROCESSING,
                                     'recipient': None,
                                     'payment_credit_card': None,
                                     'shipping_address': None,
                                     'shipping_amount': None,
                                     'subscription_savings': None,
                                     'shipping_savings': None,
                                     'tax_amount': None,
                                     'tax_refund_amount': None,
                                     'total_before_tax_amount': None,
                                     'total_refund_amount': None,
                                     'courtesy_credit_amount': None,
                                     'rewards_amount': None,
                                     'transactions': [{'amount': 1.0, 'cc_last_4': '0001', 'date': '1/1/1'},
                                                      {'amount': 2.0, 'cc_last_4': '0002', 'date': '1/2/1'}]}


def test_recursive_vars_ignore_non():
    order = Order("1", None, "details", "invoice")
    order.transactions = [Transaction("1/1/1", 1.0, "0001"),
                          Transaction("1/2/1", 2.0, "0002")]

    assert recursive_vars(order, True) == {
        'details_link': 'details',
        'invoice_link': 'invoice',
        'number': '1',
        'status': OrderStatus.PROCESSING,
        'transactions': [{'amount': 1.0, 'cc_last_4': '0001', 'date': '1/1/1'},
                         {'amount': 2.0, 'cc_last_4': '0002', 'date': '1/2/1'}]}


def set_logging_level(level):
    log.basicConfig(level=level)
