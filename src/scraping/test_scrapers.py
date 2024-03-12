import logging as log
import math
import os
from datetime import datetime
from unittest.mock import patch

import pytest
from selenium.webdriver.common.by import By

from scraping.model import Transaction, Order
from scraping.scrapers import OrderHistory, OrderDetail, PageIterator, Login, CAPTCHA1, CAPTCHA2
from scraping.utils import create_driver_with_default_options
from utils.objects import recursive_vars

# log.basicConfig(level=log.DEBUG)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

ORDER_HISTORY_PAGE_1 = "order_history_p1.html"
ORDER_HISTORY_PAGE_2 = "order_history_p2.html"
ORDER_HISTORY_PAGE_7 = "order_history_p7.html"


@pytest.fixture
def driver():
    driver = create_driver_with_default_options()
    yield driver
    driver.quit()


@pytest.fixture
def order():
    return Order("1", None, None)


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
    [ORDER_HISTORY_PAGE_1,
     "https://www.amazon.com/your-orders/orders?timeFilter=year-2024&startIndex=10&ref_=ppx_yo2ov_dt_b_pagination_1_2"],
    [ORDER_HISTORY_PAGE_2,
     "https://www.amazon.com/your-orders/orders?timeFilter=year-2024&startIndex=20&ref_=ppx_yo2ov_dt_b_pagination_2_3"],
])
def test_page_iterator(driver, current, next):
    load_page(driver, current)

    with patch.object(PageIterator, "get_page", return_value=None) as mock_get:
        it = PageIterator(OrderHistory(driver))
        it.__iter__()
        it.__next__()

        mock_get.assert_called_once_with(next)


def test_page_iterator_on_last_page(driver):
    load_page(driver, ORDER_HISTORY_PAGE_7)

    with pytest.raises(StopIteration):
        it = PageIterator(OrderHistory(driver))
        it.__iter__()
        it.__next__()


def test_order_history_get_all_orders(driver):
    load_page(driver, ORDER_HISTORY_PAGE_1)

    with patch.object(PageIterator,
                      "get_next_page_link",
                      side_effect=[get_test_page_link(ORDER_HISTORY_PAGE_2),
                                   get_test_page_link(ORDER_HISTORY_PAGE_7)]), \
            patch.object(OrderDetail, "populate") as mock_populate:
        orders = OrderHistory(driver).get_all_orders()

        assert_object_arrays_equal([
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=112-7980230-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o00?ie=UTF8&orderID=112-7980230-1111111',
                'order_number': '112-7980230-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o01?ie=UTF8&orderID=114-2192237-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o01?ie=UTF8&orderID=114-2192237-1111111',
                'order_number': '114-2192237-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o02?ie=UTF8&orderID=112-8291086-2222222',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o02?ie=UTF8&orderID=112-8291086-2222222',
                'order_number': '112-8291086-2222222'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o03?ie=UTF8&orderID=112-0162431-3333333',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o03?ie=UTF8&orderID=112-0162431-3333333',
                'order_number': '112-0162431-3333333'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o04?ie=UTF8&orderID=112-8282011-4444444',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o04?ie=UTF8&orderID=112-8282011-4444444',
                'order_number': '112-8282011-4444444'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o05?ie=UTF8&orderID=112-7330075-5555555',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o05?ie=UTF8&orderID=112-7330075-5555555',
                'order_number': '112-7330075-5555555'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o06?ie=UTF8&orderID=112-1902758-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o06?ie=UTF8&orderID=112-1902758-1111111',
                'order_number': '112-1902758-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o07?ie=UTF8&orderID=112-9988160-2222222',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o07?ie=UTF8&orderID=112-9988160-2222222',
                'order_number': '112-9988160-2222222'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o08?ie=UTF8&orderID=112-5388327-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o08?ie=UTF8&orderID=112-5388327-1111111',
                'order_number': '112-5388327-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o09?ie=UTF8&orderID=112-9722039-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o09?ie=UTF8&orderID=112-9722039-1111111',
                'order_number': '112-9722039-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=112-9722039-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o00?ie=UTF8&orderID=112-9722039-1111111',
                'order_number': '112-9722039-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o01?ie=UTF8&orderID=112-4659380-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o01?ie=UTF8&orderID=112-4659380-1111111',
                'order_number': '112-4659380-1111111'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o02?ie=UTF8&orderID=112-0301652-2222222',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o02?ie=UTF8&orderID=112-0301652-2222222',
                'order_number': '112-0301652-2222222'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o03?ie=UTF8&orderID=113-0346717-3333333',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o03?ie=UTF8&orderID=113-0346717-3333333',
                'order_number': '113-0346717-3333333'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o04?ie=UTF8&orderID=112-7543942-4444444',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o04?ie=UTF8&orderID=112-7543942-4444444',
                'order_number': '112-7543942-4444444'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o05?ie=UTF8&orderID=112-6778897-5555555',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o05?ie=UTF8&orderID=112-6778897-5555555',
                'order_number': '112-6778897-5555555'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o06?ie=UTF8&orderID=112-1960387-6666666',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o06?ie=UTF8&orderID=112-1960387-6666666',
                'order_number': '112-1960387-6666666'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o07?ie=UTF8&orderID=112-9888447-7777777',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o07?ie=UTF8&orderID=112-9888447-7777777',
                'order_number': '112-9888447-7777777'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o08?ie=UTF8&orderID=112-8952643-8888888',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o08?ie=UTF8&orderID=112-8952643-8888888',
                'order_number': '112-8952643-8888888'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o09?ie=UTF8&orderID=112-9065471-9999999',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o09?ie=UTF8&orderID=112-9065471-9999999',
                'order_number': '112-9065471-9999999'},
            {
                'details_link': 'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=112-3194835-1111111',
                'invoice_link': 'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o00?ie=UTF8&orderID=112-3194835-1111111',
                'order_number': '112-3194835-1111111'}], orders, True)

        assert [args[0][0].order_number for args in mock_populate.call_args_list] == [
            "112-7980230-1111111",
            "114-2192237-1111111",
            "112-8291086-2222222",
            "112-0162431-3333333",
            "112-8282011-4444444",
            "112-7330075-5555555",
            "112-1902758-1111111",
            "112-9988160-2222222",
            "112-5388327-1111111",
            "112-9722039-1111111",
            "112-9722039-1111111",
            "112-4659380-1111111",
            "112-0301652-2222222",
            "113-0346717-3333333",
            "112-7543942-4444444",
            "112-6778897-5555555",
            "112-1960387-6666666",
            "112-9888447-7777777",
            "112-8952643-8888888",
            "112-9065471-9999999",
            "112-3194835-1111111"]


def test_order_history_get_current_page_orders(driver):
    load_page(driver, ORDER_HISTORY_PAGE_1)

    orders = OrderHistory(driver).get_current_page_orders()

    expected_orders = [Order('112-7980230-1111111',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=112-7980230-1111111',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o00?ie=UTF8&orderID=112-7980230-1111111'),
                       Order('114-2192237-1111111',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o01?ie=UTF8&orderID=114-2192237-1111111',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o01?ie=UTF8&orderID=114-2192237-1111111'),
                       Order('112-8291086-2222222',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o02?ie=UTF8&orderID=112-8291086-2222222',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o02?ie=UTF8&orderID=112-8291086-2222222'),
                       Order('112-0162431-3333333',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o03?ie=UTF8&orderID=112-0162431-3333333',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o03?ie=UTF8&orderID=112-0162431-3333333'),
                       Order('112-8282011-4444444',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o04?ie=UTF8&orderID=112-8282011-4444444',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o04?ie=UTF8&orderID=112-8282011-4444444'),
                       Order('112-7330075-5555555',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o05?ie=UTF8&orderID=112-7330075-5555555',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o05?ie=UTF8&orderID=112-7330075-5555555'),
                       Order('112-1902758-1111111',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o06?ie=UTF8&orderID=112-1902758-1111111',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o06?ie=UTF8&orderID=112-1902758-1111111'),
                       Order('112-9988160-2222222',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o07?ie=UTF8&orderID=112-9988160-2222222',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o07?ie=UTF8&orderID=112-9988160-2222222'),
                       Order('112-5388327-1111111',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o08?ie=UTF8&orderID=112-5388327-1111111',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o08?ie=UTF8&orderID=112-5388327-1111111'),
                       Order('112-9722039-1111111',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o09?ie=UTF8&orderID=112-9722039-1111111',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o09?ie=UTF8&orderID=112-9722039-1111111')]
    assert_object_arrays_equal(expected_orders, orders)


def test_order_details_populate_address(driver, order):
    body = load_page(driver, ['order_details', 'shipping_address.html'])
    get_order_detail(driver, order).populate_address(body)

    assert vars(order.shipping_address) == {'full_name': 'Hermione Granger',
                                            'street': '1111 MAIN ST',
                                            'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                                            'country': 'United Kingdom'
                                            }


def get_order_detail(driver, order):
    order_detail = OrderDetail(driver)
    order_detail.order = order
    return order_detail


@pytest.mark.parametrize("file, expected", [
    ['payment_method.html', "0001"],
    ['payment_method_gift_card.html', "Gift"],
    ['payment_method_with_gift_card_prompt.html', "9921"],
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

    assert_float_equals(order.items_subtotal_amount, 230.00)
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

    assert_object_arrays_equal([
        Transaction(datetime(2024, 2, 25, 0, 0), 22.59, None),
        Transaction(datetime(2024, 2, 14, 0, 0), -55.04, '0002'),
        Transaction(datetime(2024, 2, 14, 0, 0), -10.81, '0002'),
    ], order.transactions)


@pytest.mark.parametrize("line, expected", [
    ["Refund: Completed February 25, 2024 - $22.59",
     "Transaction(date=datetime.datetime(2024, 2, 25, 0, 0), amount=22.59, cc_last_4=None)"],
    ["Refund:  25, 2024 - $22.59",
     "Transaction(date=None, amount=0, cc_last_4='Unparseable refund: Refund:  25, 2024 - $22.59')"]
])
def test_extract_refund(driver, order, line, expected):
    order_detail = get_order_detail(driver, order)
    tx = order_detail.extract_refund(line)
    assert expected == str(tx)


@pytest.mark.parametrize("line, expected", [
    ["Items shipped: February 14, 2024 - Visa ending in 0002: $55.04",
     "Transaction(date=datetime.datetime(2024, 2, 14, 0, 0), amount=-55.04, cc_last_4='0002')"],
    ["February 14, 2024 - Visa ending in 0001: $5.05",
     "Transaction(date=datetime.datetime(2024, 2, 14, 0, 0), amount=-5.05, cc_last_4='0001')"],
    ["February 14, 2024 - Visa ending in : $55.04",
     "Transaction(date=None, amount=0, cc_last_4='Unparseable payment: February 14, 2024 - Visa ending in : $55.04')"]
])
def test_extract_payment(driver, order, line, expected):
    order_detail = get_order_detail(driver, order)
    tx = order_detail.extract_payment(line)
    assert expected == str(tx)


@pytest.mark.parametrize("link, expected", [
    ['order_details_1_item_not_shipped.html', {
        'order_number': '1',
        'details_link': 'file:///Users/jacques/dev/amazon-scraping/test_pages/order_details/order_details_1_item_not_shipped.html',
        'invoice_link': None, 'shipping_address': {'full_name': 'Hermione Granger',
                                                   'street': '1111 MAIN ST',
                                                   'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                                                   'country': 'United Kingdom'},
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
        'shipping_savings': None}],
    ['order_details_3_items_received_1_refunded_2_txs_coupon.html', {
        'coupon_savings': 5.22,
        'details_link': 'file:///Users/jacques/dev/amazon-scraping/test_pages/order_details/order_details_3_items_received_1_refunded_2_txs_coupon.html',
        'gift_card_amount': None,
        'grand_total_amount': 65.85,
        'invoice_link': None,
        'items_refund_amount': None,
        'items_subtotal_amount': 66.06,
        'order_number': '1',
        'payment_credit_card': '0002',
        'shipping_address': {'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                             'country': 'United Kingdom',
                             'full_name': 'Harry Potter',
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
        'transactions': [{'amount': 22.59,
                          'cc_last_4': None,
                          'date': datetime(2024, 2, 25, 0, 0)},
                         {'amount': -55.04,
                          'cc_last_4': '0002',
                          'date': datetime(2024, 2, 14, 0, 0)},
                         {'amount': -10.81,
                          'cc_last_4': '0002',
                          'date': datetime(2024, 2, 14, 0, 0)}]}
     ],
])
def test_order_details_populate(driver, order, link, expected):
    order.details_link = get_test_page_link(link)

    OrderDetail(driver).populate(order)

    assert recursive_vars(order) == expected


def load_page(driver, relative_path_elements):
    link = get_test_page_link(relative_path_elements)
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
    assert [recursive_vars(o, ignore_none) for o in expected] == [recursive_vars(o, ignore_none) for o in actual]


def test_recursive_vars():
    order = Order("1", "details", "invoice")
    order.transactions = [Transaction("1/1/1", 1.0, "0001"),
                          Transaction("1/2/1", 2.0, "0002")]

    assert recursive_vars(order) == {'coupon_savings': None,
                                     'details_link': 'details',
                                     'gift_card_amount': None,
                                     'grand_total_amount': None,
                                     'invoice_link': 'invoice',
                                     'items_refund_amount': None,
                                     'items_subtotal_amount': None,
                                     'order_number': '1',
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
    order = Order("1", "details", "invoice")
    order.transactions = [Transaction("1/1/1", 1.0, "0001"),
                          Transaction("1/2/1", 2.0, "0002")]

    assert recursive_vars(order, True) == {
        'details_link': 'details',
        'invoice_link': 'invoice',
        'order_number': '1',
        'transactions': [{'amount': 1.0, 'cc_last_4': '0001', 'date': '1/1/1'},
                         {'amount': 2.0, 'cc_last_4': '0002', 'date': '1/2/1'}]}


def set_logging_level(level):
    log.basicConfig(level=level)
