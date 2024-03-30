from scraping.amazon.scrapers import log
from scraping.framework.dsl import Div, Variable, A, By, ManyOf
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


def test_div_multiple_variables_under_one_tag(headless_driver):
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
                A(children=[
                    Variable(name="title", attr="outerText"),
                    Variable(name="link", attr="href")]
                ))), {
            "title": "Product title",
            "link": "http://link.com/"
        }
    )


def test_div_multiple_variables_under_multiple_tag_same_level(headless_driver):
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


def test_div_multiple_variables_under_multiple_tag_different_level(headless_driver):
    assert_scraping_equal(
        headless_driver,
        """
        <div class="container">
            <div class="item">
                <div>
                  Beautiful Title
                </div>
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
        Div(By.CLASS, "container", children=[
            Div(By.CLASS, "item",
                Div(By.POSITION, 1,
                    Variable(name="title", attr="outerText")
                    )),
            Div(By.POSITION, 2,
                Variable(name="reference", attr="outerText")
                )
        ]), {
            "title": "Beautiful Title",
            "reference": "Reference"
        }
    )


def test_div_multiple_variables_under_a_container(headless_driver):
    assert_scraping_equal(
        headless_driver,
        """
        <div class="container">
            <div class="item">
                <div> item 1 </div>
                <div> description 1 </div>
            </div>
            <div class="item">
                <div> item 2 </div>
                <div> description 2 </div>
            </div>
        </div>""",
        Div(By.CLASS, "container",
            ManyOf("items",
                   Div(By.CLASS, "item", [
                       Div(By.POSITION, 1,
                           Variable(name="title", attr="outerText")),
                       Div(By.POSITION, 2,
                           Variable(name="description", attr="outerText"))
                   ])
                   )
            ),
        {"items": [
            {"title": "item 1", "description": "description 1"},
            {"title": "item 2", "description": "description 2"}
        ]}
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
