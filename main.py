import json

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from scraping.scrapers import Login, OrderHistory
from onepassword.client import get_item_fields
import logging as log

log.basicConfig(level=log.INFO)


def create_driver():
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')
    return webdriver.Chrome(options=options, service=Service(ChromeDriverManager().install()))


def to_dict(object):
    return object.__dict__


def run():
    email, password = get_item_fields("ServiceAccount", "Amazon", ["username", "password"])

    driver = create_driver()

    Login(driver, email, password).login()
    orders = OrderHistory(driver).get_orders()

    print(json.dumps(orders, default=to_dict))

    # keep this line of code at the bottom
    user_input = input("Please enter something: ")
    driver.quit()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    run()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
