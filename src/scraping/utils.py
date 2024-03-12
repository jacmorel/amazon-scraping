import logging as log

from selenium import webdriver

from onepassword.client import get_item_fields
from scraping.scrapers import Login
from utils.objects import to_json


def run_with_driver(to_execute):
    log.basicConfig(level=log.INFO)

    # driver = create_driver()
    driver = create_driver_with_default_options()
    login(driver)
    input("Login done. Press Enter to continue...: ")

    results = to_execute(driver)

    print(to_json(results))

    input("Processing complete. Press Enter to quit...")
    driver.quit()


def create_driver_with_default_options():
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')
    chrome_prefs = {"profile.managed_default_content_settings.images": 2,
                    "profile.managed_default_content_settings.javascript": 2,
                    "permissions.default.stylesheet": 2}
    # options.add_experimental_option("prefs", chrome_prefs)
    return create_driver(options)


def create_driver(options=None):
    driver = webdriver.Chrome(options=options)
    return driver


def login(driver):
    email, password = get_item_fields("ServiceAccount", "Amazon", ["username", "password"])
    Login(driver, email, password).login()


