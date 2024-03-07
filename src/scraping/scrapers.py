from selenium.webdriver.chromium.webdriver import ChromiumDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.select import Select
import logging as log


class Scraper:
    def __init__(self, driver: ChromiumDriver):
        self.driver = driver

    def find_element_by_id(self, value: str) -> WebElement:
        return self.driver.find_element(by=By.ID, value=value)

    def find_element_by_id(self, parent: WebElement, value: str) -> WebElement:
        return parent.find_element(by=By.ID, value=value)

    def find_element_by_class(self, value: str) -> WebElement:
        return self.driver.find_element(by=By.CLASS_NAME, value=value)

    def find_element_by_class(self, parent: WebElement, value: str) -> WebElement:
        return parent.find_element(by=By.CLASS_NAME, value=value)

    def find_element_by_css(self, value: str) -> WebElement:
        return self.driver.find_element(by=By.CSS_SELECTOR, value=value)

    def find_element_by_css(self, parent: WebElement, value: str) -> WebElement:
        return parent.find_element(by=By.CSS_SELECTOR, value=value)

    def find_element_by_xpath(self, value: str) -> WebElement:
        return self.driver.find_element(by=By.XPATH, value=value)

    def find_element_by_xpath(self, parent: WebElement, value: str) -> WebElement:
        return parent.find_element(by=By.XPATH, value=value)

    def find_elements_by_class(self, value: str) -> [WebElement]:
        return self.driver.find_elements(by=By.CLASS_NAME, value=value)

    def find_elements_by_xpath(self, value: str) -> [WebElement]:
        return self.driver.find_elements(by=By.XPATH, value=value)

    def find_elements_by_xpath(self, parent: WebElement, value: str) -> [WebElement]:
        return parent.find_elements(by=By.XPATH, value=value)

    def wait_for_input(self):
        input("Press Enter to continue: ")


class Login(Scraper):
    def __init__(self, driver: ChromiumDriver, email, password):
        super().__init__(driver)
        self.email = email
        self.password = password

    def login(self):
        homePage = 'https://www.amazon.com'
        self.driver.get(homePage)
        self.driver.implicitly_wait(10)
        self.handle_captcha()

        signinLink = self.find_element_by_id("nav-link-accountList")
        loginPage = signinLink.get_property("href")
        self.driver.get(loginPage)

        continueBtn = self.find_element_by_id("continue")
        emailField = self.find_element_by_id("ap_email")
        emailField.send_keys(self.email)
        continueBtn.click()

        continueBtn = self.find_element_by_id("signInSubmit")
        passwordField = self.find_element_by_id("ap_password")
        passwordField.send_keys(self.password)
        continueBtn.click()

    def handle_captcha(self):
        self.wait_for_input()


class Order:
    def __init__(self, order_number, details_link, invoice_link):
        self.order_number = order_number
        self.details_link = details_link
        self.invoice_link = invoice_link

    def __repr__(self):
        return f"Order(number={self.order_number!r}, details={self.details_link!r}, invoice={self.invoice_link!r})"

class OrderHistory(Scraper):
    def get_orders(self):
        self.driver.get("https://www.amazon.com/gp/your-account/order-history")
        self.filter_orders("2024")
        return self.get_current_page_orders()

    def filter_orders(self, filter):
        orderFilter = Select(self.find_element_by_id("time-filter"))
        orderFilter.select_by_visible_text(filter)
        orderFilterForm = self.find_element_by_id("time-filter")
        orderFilterForm.submit()

    def get_current_page_orders(self):
        elements = self.find_elements_by_class("order-card")
        orders = [self.get_order_card(e) for e in elements]
        return orders

    def get_order_card(self, element):
        order = Order(self.get_order_number(element),
                      self.get_order_details_link(element),
                      self.get_order_invoice_link(element))
        log.info("Order number: %s", order.order_number)
        return order

    def get_order_number(self, order_card):
        element = self.find_element_by_css(order_card,
                                           ".yohtmlc-order-id .a-color-secondary.value bdi")
        # value="//span[contains(., 'Order #')]/following-sibling::span/bdi")
        # value='//span[@class="a-color-secondary" and preceding-sibling::span[.="Order #"]]')
        # value='//span[preceding-sibling::span[.="Order #"]]')
        return element.text

    def get_order_details_link(self, order_card):
        element = self.find_element_by_class(order_card, "yohtmlc-order-details-link")
        return element.get_property("href")

    def get_order_invoice_link(self, order_card):
        element = order_card.find_element(By.LINK_TEXT, 'View invoice')
        return element.get_property("href")


