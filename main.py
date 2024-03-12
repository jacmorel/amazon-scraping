from scraping.scrapers import OrderHistory
from scraping.utils import run_with_driver

from_year = 2024
to_year = 2024
years = list(map(str, range(from_year, to_year + 1)))


def run(driver):
    return OrderHistory(driver).get_orders(years)


def get_output_file_name(from_year, to_year):
    if from_year < to_year:
        return "orders_" + str(from_year) + "-" + str(to_year)
    elif from_year == to_year:
        return "orders_" + str(from_year)
    raise Exception(f"from_year={from_year} should be less than to_year={to_year}")


if __name__ == '__main__':
    name = get_output_file_name(from_year, to_year)
    run_with_driver(run, name)
