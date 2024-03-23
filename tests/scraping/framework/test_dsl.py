from selenium.webdriver.common.by import By

from scraping.framework.dsl import Div, Variable
from testing.files import write_temp_file, read_file


def test_div(headless_driver):
    body = """<div class="container">
                <div class="item">
                    Item
                </div>
            </div>"""
    scraping_dsl = Div(By.CLASS_NAME, "container", Div(By.CLASS_NAME, "item", Variable(name="item", attr="outerText")))
    expected = {"item": "Item"}
    assert_scraping_equal(headless_driver, body, scraping_dsl, expected)


def assert_scraping_equal(driver, body, scraping_dsl, expected):
    file = write_temp_file(extension="html", content=(""""
    <!DOCTYPE html>
    <html lang="en">
        <body>
            %s
        </body>
    </html>
""" % body))
    driver.get(f"file://{file}")
    actual = scraping_dsl.scrape(driver)
    assert actual == expected
