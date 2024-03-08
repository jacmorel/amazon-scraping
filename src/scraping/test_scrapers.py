import logging as log
import os
from datetime import datetime

import pytest
from selenium import webdriver

from scraping.scrapers import OrderHistory, Order, OrderDetail, Transaction

log.basicConfig(level=log.INFO)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    # input("Press Enter to continue")
    driver.quit()


def test_get_current_page_orders(driver):
    load_page(driver, ['order_history', 'order_history_p1.html'])

    orders = OrderHistory(driver).get_current_page_orders()

    expected_orders = [Order('112-7980230-2841858',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=112-7980230-2841858',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o00?ie=UTF8&orderID=112-7980230-2841858'),
                       Order('114-2192237-6633858',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o01?ie=UTF8&orderID=114-2192237-6633858',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o01?ie=UTF8&orderID=114-2192237-6633858'),
                       Order('112-8291086-1978617',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o02?ie=UTF8&orderID=112-8291086-1978617',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o02?ie=UTF8&orderID=112-8291086-1978617'),
                       Order('112-0162431-6915479',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o03?ie=UTF8&orderID=112-0162431-6915479',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o03?ie=UTF8&orderID=112-0162431-6915479'),
                       Order('112-8282011-7706646',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o04?ie=UTF8&orderID=112-8282011-7706646',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o04?ie=UTF8&orderID=112-8282011-7706646'),
                       Order('112-7330075-0555401',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o05?ie=UTF8&orderID=112-7330075-0555401',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o05?ie=UTF8&orderID=112-7330075-0555401'),
                       Order('112-1902758-0293030',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o06?ie=UTF8&orderID=112-1902758-0293030',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o06?ie=UTF8&orderID=112-1902758-0293030'),
                       Order('112-9988160-1836260',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o07?ie=UTF8&orderID=112-9988160-1836260',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o07?ie=UTF8&orderID=112-9988160-1836260'),
                       Order('112-5388327-3677061',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o08?ie=UTF8&orderID=112-5388327-3677061',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o08?ie=UTF8&orderID=112-5388327-3677061'),
                       Order('112-9722039-7405835',
                             'https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o09?ie=UTF8&orderID=112-9722039-7405835',
                             'https://www.amazon.com/gp/css/summary/print.html/ref=ppx_yo_dt_b_invoice_o09?ie=UTF8&orderID=112-9722039-7405835')]
    assert_object_arrays_equal(expected_orders, orders)


def test_get_order_details_summary(driver):
    load_page(driver, ['order_details', 'order_summary.html'])

    summary = OrderDetail(driver, Order("1", None, None)).get_summary()

    assert {'Estimated tax to be collected:': '$5.71',
            'Grand Total:': '$74.98',
            'Item(s) Subtotal:': '$69.27',
            'Shipping & Handling:': '$0.00',
            'Total before tax:': '$69.27'} == summary


def test_get_order_details_transactions(driver):
    load_page(driver, ['order_details', 'transactions.html'])

    transactions = OrderDetail(driver, Order("1", None, None)).get_transactions()

    assert_object_arrays_equal([
        Transaction(datetime(2024, 2, 25, 0, 0), 22.59, None),
        Transaction(datetime(2024, 2, 14, 0, 0), -55.04, '0002'),
        Transaction(datetime(2024, 2, 14, 0, 0), -10.81, '0002'),
    ], transactions)


@pytest.mark.parametrize("line, expected", [
    ["Refund: Completed February 25, 2024 - $22.59",
     "Transaction(date=datetime.datetime(2024, 2, 25, 0, 0), amount=22.59, cc_last_4=None)"],
    ["Refund:  25, 2024 - $22.59",
     "Transaction(date=None, amount=0, cc_last_4='Unparseable refund: Refund:  25, 2024 - $22.59')"]
])
def test_extract_refund(driver, line, expected):
    order_detail = OrderDetail(driver, Order(None, None, None))
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
def test_extract_payment(driver, line, expected):
    order_detail = OrderDetail(driver, Order(None, None, None))
    tx = order_detail.extract_payment(line)
    assert expected == str(tx)


def load_page(driver, relative_path_elements):
    path_elements = ['test_pages'] + relative_path_elements
    test_file_path = os.path.join(BASE_DIR, *path_elements)
    driver.get(f'file://{test_file_path}')


def order(number="", details_link="", invoice_link=""):
    return Order(number, details_link, invoice_link)


def assert_object_arrays_equal(expected, actual):
    assert [vars(o) for o in expected] == [vars(o) for o in actual]
