from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from scraping.scrapers import Login, OrderHistory
from onepassword.client import get_item_fields
import logging as log

log.basicConfig(level=log.INFO)

email, password = get_item_fields("ServiceAccount", "Amazon", ["username", "password"])


def create_driver():
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')
    return webdriver.Chrome(options=options, service=Service(ChromeDriverManager().install()))


driver = create_driver()

Login(driver, email, password).login()
OrderHistory(driver).get_orders()

# keep this line of code at the bottom
user_input = input("Please enter something: ")
driver.quit()
