import re
import sys
from datetime import datetime

from scraping.amazon.model import Order
from scraping.amazon.scrapers import OrderDetail
from scraping.framework.utils import run_with_driver

page = ""


def run(driver):
    o = Order(order_number, datetime.now(), page, "")
    OrderDetail(driver).populate(o)
    return o


def parse_args(argv):
    global page
    if (len(argv) == 2 and argv[1] == "--help") or (len(argv) == 1):
        print("Usage: python main_details.py <order details url>")
        exit()
    elif len(argv) == 2:
        page = argv[1]


if __name__ == '__main__':
    parse_args(sys.argv)

    order_number = re.search(r'orderID=(.*?)$', page).group(1)

    run_with_driver(run, f"order-{order_number}", f"order {order_number} details")
