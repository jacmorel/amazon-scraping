import logging as log
import os
from datetime import datetime
from unittest.mock import patch

import pytest
from selenium import webdriver

from scraping.scrapers import OrderHistory, Order, OrderDetail, Transaction, PageIterator

log.basicConfig(level=log.DEBUG)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    # input("Press Enter to continue")
    driver.quit()


@pytest.fixture
def order():
    return Order("1", None, None)


@pytest.mark.parametrize("current, next", [
    ['order_history_p1.html',
     'https://www.amazon.com/your-orders/orders?timeFilter=year-2024&startIndex=10&ref_=ppx_yo2ov_dt_b_pagination_1_2'],
    ['order_history_p2.html',
     'https://www.amazon.com/gp/product/B0BFG45YJ9/ref=ppx_yo_dt_b_asin_title_o07_s03?ie=UTF8&psc=1'],
])
def test_page_iterator(driver, current, next):
    load_page(driver, ['order_history', current])

    with patch.object(PageIterator, "get", return_value=None) as mock_get:
        it = PageIterator(OrderHistory(driver))
        it.__iter__()
        it.__next__()

        mock_get.assert_called_once_with(next)


def test_page_iterator_on_last_page(driver):
    load_page(driver, ['order_history', 'order_history_p7.html'])

    with pytest.raises(StopIteration):
        it = PageIterator(OrderHistory(driver))
        it.__iter__()
        it.__next__()


def test_get_current_page_orders(driver):
    load_page(driver, ['order_history', 'order_history_p1.html'])

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
    load_page(driver, ['order_details', 'shipping_address.html'])

    OrderDetail(driver, order).populate_address()

    assert vars(order.shipping_address) == {'full_name': 'Hermione Granger',
                                            'street': '1111 MAIN ST',
                                            'city_state_postal': 'LITTLE WHINGING, SU 12345-3453',
                                            'country': 'United Kingdom'
                                            }


def test_order_details_populate_payment(driver, order):
    load_page(driver, ['order_details', 'payment_method.html'])

    OrderDetail(driver, order).populate_payment()

    assert order.payment_credit_card == "0001"


def test_order_details_populate_summary(driver, order):
    load_page(driver, ['order_details', 'order_summary.html'])

    OrderDetail(driver, order).populate_summary()

    assert order.items_subtotal_amount == 230.00
    assert order.shipping_amount == 2.00
    assert order.tax_amount == 18.98
    assert order.gift_card_amount == 249.98
    assert order.grand_total_amount == 1.00
    assert order.items_refund_amount == 230.00
    assert order.tax_refund_amount == 17.98
    assert order.total_refund_amount == 248.98


def test_order_details_populate_summary_refund(driver, order):
    set_logging_level(log.INFO)

    load_page(driver, ['order_details', 'order_summary_refund_section.html'])

    OrderDetail(driver, order).populate_summary()

    assert order.items_refund_amount == 230.00
    assert order.tax_refund_amount == 17.98
    assert order.total_refund_amount == 248.98


def test_order_details_populate_transactions(driver, order):
    load_page(driver, ['order_details', 'transactions.html'])

    OrderDetail(driver, order).populate_transactions()

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
    order_detail = OrderDetail(driver, order)
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
    order_detail = OrderDetail(driver, order)
    tx = order_detail.extract_payment(line)
    assert expected == str(tx)


def load_page(driver, relative_path_elements):
    path_elements = ['test_pages'] + relative_path_elements
    test_file_path = os.path.join(BASE_DIR, *path_elements)
    driver.get(f'file://{test_file_path}')


def assert_object_arrays_equal(expected, actual):
    assert [vars(o) for o in expected] == [vars(o) for o in actual]


def set_logging_level(level):
    log.basicConfig(level=level)
