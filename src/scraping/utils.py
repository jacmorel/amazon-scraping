import csv
import json
import logging as log
from datetime import datetime

from selenium import webdriver

from onepassword.client import get_item_fields
from scraping.scrapers import Login
from utils.objects import to_json


def run_with_driver(to_execute, name):
    log.basicConfig(level=log.INFO)

    # driver = create_driver()
    driver = create_driver_with_default_options()
    login(driver)
    input("Login done. Press Enter to continue...: ")

    results = to_execute(driver)

    write_output_files(name, results)

    input("Processing complete. Press Enter to quit...")
    driver.quit()


def write_output_files(name, results):
    json_data = to_json(results)
    write_json_output_file(json_data, name)
    write_csv_output_file(json_data, name)


def write_json_output_file(json_data, name):
    file_name = get_output_file(name, "json")
    print(f"Saving output to {file_name}")
    with open(file_name, 'w') as file:
        json.dump(json_data, file, ensure_ascii=False, indent=4)


def write_csv_output_file(json_data, name):
    file_name = get_output_file(name, "csv")
    print(f"Saving output to {file_name}")
    with open(file_name, 'w') as file:
        csv_writer = csv.DictWriter(file, fieldnames=json_data[0].keys())
        csv_writer.writeheader()
        csv_writer.writerows(json_data)


def get_output_file(name, ext):
    return f"output/{name}-{datetime.now().strftime('%Y-%m-%d_%H-%M')}.{ext}"


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


