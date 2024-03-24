from scraping.amazon.scrapers import log
from scraping.framework.dsl import Div, Variable, A, By
from testing.files import write_temp_file


def test_div(headless_driver):
    assert_scraping_equal(
        headless_driver,
        """
        <div class="container">
            <div class="item">
                Item
            </div>
        </div>""",
        Div(By.CLASS, "container",
            Div(By.CLASS, "item",
                Variable(name="item", attr="outerText")
                )),
        {"item": "Item"}
    )


def test_div_multiple_variable_under_one_tag(headless_driver):
    assert_scraping_equal(
        headless_driver,
        """
        <div class="container">
            <div class="item">
                <a href="http://link.com">
                    Product title
            </div>
        </div>""",
        Div(By.CLASS, "container",
            Div(By.CLASS, "item",
                A(contents=[
                    Variable(name="title", attr="outerText"),
                    Variable(name="link", attr="href")]
                ))), {
            "title": "Product title",
            "link": "http://link.com/"
        }
    )


def test_div_multiple_variable_under_multiple_tag(headless_driver):
    assert_scraping_equal(
        headless_driver,
        """
        <div class="container">
            <div class="item">
                <div>
                  Beautiful Title
                </div>
                <div>
                     Reference
                </div>
                <div>
                     details
                </div>
            </div>
            <div>
                other 1
            </div>
            <div>
                other 2
            </div>
        </div>""",
        Div(By.CLASS, "container",
            Div(By.CLASS, "item", [
                Div(By.POSITION, 1,
                    Variable(name="title", attr="outerText")
                    ),
                Div(By.POSITION, 2,
                    Variable(name="reference", attr="outerText")
                    )
            ])), {
            "title": "Beautiful Title",
            "reference": "Reference"
        }
    )


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
