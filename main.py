import sys

from scraping.amazon.scrapers import OrderHistory
from scraping.framework.utils import run_with_driver

from_year = 2023
to_year = 2024


def run(driver):
    years = list(map(str, range(from_year, to_year + 1)))
    return OrderHistory(driver).get_all_orders(years)


def get_file_base_name(from_year, to_year):
    if from_year < to_year:
        return "orders_" + str(from_year) + "-" + str(to_year)
    elif from_year == to_year:
        return "orders_" + str(from_year)
    raise Exception(f"from_year={from_year} should be less than to_year={to_year}")


def parse_args(argv):
    global from_year, to_year
    if len(argv) == 2 and argv[1] == "--help":
        print("Usage: python main.py [from_year] [to_year]")
        exit()
    elif len(argv) == 2:
        from_year = int(argv[1])
        to_year = int(argv[1])
    elif len(argv) == 3:
        from_year = int(argv[1])
        to_year = int(argv[2])


if __name__ == '__main__':
    parse_args(sys.argv)

    name = get_file_base_name(from_year, to_year)

    run_with_driver(run, name, f"orders from {from_year}{f" to {to_year}" if from_year < to_year else ""}")
