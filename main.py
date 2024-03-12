from scraping.scrapers import OrderHistory
from scraping.utils import run_with_driver


def run(driver):
    return OrderHistory(driver).get_orders()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    run_with_driver(run)

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
