from scraping.model import Order
from scraping.scrapers import OrderDetail
from scraping.utils import run_with_driver


def run(driver):
    # page = "https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=114-6770746-5681035"
    page = "https://www.amazon.com/gp/your-account/order-details/ref=ppx_yo_dt_b_order_details_o00?ie=UTF8&orderID=112-3242278-6505054"
    o = Order("`", page, "")
    OrderDetail(driver).populate(o)
    return o


if __name__ == '__main__':
    run_with_driver(run)
