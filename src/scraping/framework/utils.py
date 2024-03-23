import csv
import json
import logging as log
from datetime import datetime

from selenium import webdriver

from onepassword.client import get_item_fields
from scraping.amazon.scrapers import Login
from utils.objects import to_json


def run_with_driver(to_execute, base_name, message):
    log.basicConfig(level=log.INFO)

    base_name = get_output_file(base_name)

    print(f"Scraping {message} to {base_name}.[json|csv]")

    # driver = create_driver()
    driver = create_driver_with_default_options()
    login(driver)
    input("Login done. Press Enter to continue...: ")

    results = to_execute(driver)

    write_output_files(base_name, results)

    input("Processing complete. Press Enter to quit...")
    driver.quit()


def write_output_files(base_name, results):
    json_data = to_json(results)
    write_json_output_file(json_data, base_name)
    write_csv_output_file(json_data, base_name)


def write_json_output_file(json_data, base_name):
    file_name = base_name + ".json"
    print(f"Saving output to {file_name}")
    with open(file_name, 'w') as file:
        json.dump(json_data, file, ensure_ascii=False, indent=4)


def write_csv_output_file(json_data, base_name):
    file_name = base_name + ".csv"
    print(f"Saving output to {file_name}")
    with open(file_name, 'w') as file:
        csv_writer = csv.DictWriter(file, fieldnames=json_data[0].keys())
        csv_writer.writeheader()
        csv_writer.writerows(json_data)


def get_output_file(base_name):
    return f"output/{base_name}__{datetime.now().strftime('%Y-%m-%d_%H-%M')}"


def create_driver_with_default_options(headless=False):
    options = webdriver.ChromeOptions()
    if headless:
        options.add_argument('--headless')
    chrome_prefs = {"profile.managed_default_content_settings.images": 2,
                    "profile.managed_default_content_settings.javascript": 2,
                    "permissions.default.stylesheet": 2}
    options.add_experimental_option("prefs", chrome_prefs)
    return create_driver(options)


def create_driver(options=None):
    driver = webdriver.Chrome(options=options)
    return driver


def login(driver):
    email, password = get_item_fields("ServiceAccount", "Amazon", ["username", "password"])
    Login(driver, email, password).login()
