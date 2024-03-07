import logging as log
import os

import pytest
from selenium import webdriver

from scraping.scrapers import OrderHistory, Order

log.basicConfig(level=log.INFO)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


@pytest.fixture
def driver():
    driver = webdriver.Chrome()
    yield driver
    # input("Press Enter to continue")
    driver.quit()


def test_get_current_page_orders(driver):
    test_file_path = os.path.join(BASE_DIR, 'test_pages', 'order_history', 'order_history_p1.html')
    driver.get(f'file://{test_file_path}')

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
    assert [vars(o) for o in expected_orders] == [vars(o) for o in orders]
