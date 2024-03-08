import logging as log
import re
from datetime import datetime

from selenium.webdriver.chromium.webdriver import ChromiumDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.select import Select

ITEMS_SHIPPED = "Items shipped:"
ITEMS_SHIPPED_LEN = len(ITEMS_SHIPPED)


class Scraper:
    def __init__(self, driver: ChromiumDriver):
        self.driver = driver

    def find_element_by_id(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.ID, value=value)

    def find_element_by_class(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.CLASS_NAME, value=value)

    def find_element_by_css(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.CSS_SELECTOR, value=value)

    def find_element_by_xpath(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.XPATH, value=value)

    def find_elements_by_class(self, value: str) -> [WebElement]:
        return self.driver.find_elements(by=By.CLASS_NAME, value=value)

    def find_elements_by_xpath(self, value: str, parent: WebElement = None) -> [WebElement]:
        return self.driver_if_null(parent).find_elements(by=By.XPATH, value=value)

    def driver_if_null(self, parent):
        return parent if parent else self.driver

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


class Transaction:
    def __init__(self, date, amount, cc_last_4):
        self.date = date
        self.amount = amount
        self.cc_last_4 = cc_last_4

    def __repr__(self):
        return f"Transaction(date={self.date!r}, amount={self.amount!r}, cc_last_4={self.cc_last_4!r})"


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
        element = self.find_element_by_css(".yohtmlc-order-id .a-color-secondary.value bdi", order_card)
        # value="//span[contains(., 'Order #')]/following-sibling::span/bdi")
        # value='//span[@class="a-color-secondary" and preceding-sibling::span[.="Order #"]]')
        # value='//span[preceding-sibling::span[.="Order #"]]')
        return element.text

    def get_order_details_link(self, order_card):
        element = self.find_element_by_class("yohtmlc-order-details-link", order_card)
        return element.get_property("href")

    def get_order_invoice_link(self, order_card):
        element = order_card.find_element(By.LINK_TEXT, 'View invoice')
        return element.get_property("href")


class OrderDetail(Scraper):
    def __init__(self, driver: ChromiumDriver, order=None):
        super().__init__(driver)
        self.order = order

    def populate(self, order):
        self.order = order
        self.driver.get(order.details_link)

    def get_summary(self):
        results = self.find_elements_by_xpath('//div[@id="od-subtotals"]//div[@class="a-row"]')
        details = {}
        for result in results:
            try:
                detail_name = self.find_element_by_xpath('.//div[@class="a-column a-span7 a-text-left"]',
                                                         result).text.strip()
                detail_value = self.find_element_by_xpath('.//div[@class="a-column a-span5 a-text-right a-span-last"]',
                                                          result).text.strip()
                details[detail_name] = detail_value
            except:
                log.error("Problem getting summary of order {} on element \n {}",
                          self.order.order_number.result.text.strip())
                continue
        return details

    def get_details(self):
        shipping_address = self.driver.find_element(By.CSS_SELECTOR, ".displayAddressDiv").text
        payment_method = self.driver.find_element(By.CSS_SELECTOR,
                                                  ".pmts-payments-instrument-detail-box-paystationpaymentmethod").text
        item_subtotal = self.driver.find_element(By.XPATH,
                                                 "//span[contains(text(), 'Item(s) Subtotal:')]/../../div[@class='a-column a-span5 a-text-right a-span-last']/span").text
        shipping_handling = self.driver.find_element(By.XPATH,
                                                     "//span[contains(text(), 'Shipping & Handling:')]/../../div[@class='a-column a-span5 a-text-right a-span-last']/span").text
        total_before_tax = self.driver.find_element(By.XPATH,
                                                    "//span[contains(text(), 'Total before tax:')]/../../div[@class='a-column a-span5 a-text-right a-span-last']/span").text
        estimated_tax = self.driver.find_element(By.XPATH,
                                                 "//span[contains(text(), 'Estimated tax to be collected:')]/../../div[@class='a-column a-span5 a-text-right a-span-last']/span").text
        grand_total = self.driver.find_element(By.XPATH,
                                               "//span[contains(text(), 'Grand Total:')]/../../div[@class='a-column a-span5 a-text-right a-span-last']/span").text

    def get_transactions(self):
        transactions_div = self.find_element_by_xpath("//span[contains(text(),'Transactions')]/../../div")
        transactions_spans = self.find_elements_by_xpath("//div[contains(@class, 'a-expander-content')]//span",
                                                         transactions_div)
        lines = [e.get_attribute("outerText").strip().replace("\n", "") for e in transactions_spans]
        transactions = []
        i = 0
        while i < len(lines):
            line = lines[i]
            if line.startswith("Refund:"):
                tx = self.extract_refund(line)
            elif line.startswith(ITEMS_SHIPPED):
                if line == ITEMS_SHIPPED:
                    i += 1
                    line = lines[i]
                else:
                    line = line.replace(ITEMS_SHIPPED)
                tx = self.extract_payment(line)
            transactions.append(tx)
            i += 1
        return transactions

    def extract_refund(self, line):
        date_match = self.match_date(line)
        amount_match = self.match_amount(line)
        if not date_match or not amount_match:
            log.error("Could not parse Refund for order %s: '%s'", self.order.order_number, line)
            return Transaction(None, 0, "Unparseable refund: " + line)
        date_obj = datetime.strptime(date_match.group(1), '%B %d, %Y')
        amount_float = float(amount_match.group(1))
        return Transaction(date_obj, amount_float, None)

    def extract_payment(self, line):
        date_match = self.match_date(line)
        amount_match = self.match_amount(line)
        cc_last_4_match = self.match_credit_card(line)
        if not date_match or not amount_match or not cc_last_4_match:
            log.error("Could not parse Payment for order %s: '%s'", self.order.order_number, line)
            return Transaction(None, 0, "Unparseable payment: " + line)
        date_obj = datetime.strptime(date_match.group(1), '%B %d, %Y')
        amount_float = float(amount_match.group(1))
        cc_last_4 = cc_last_4_match.group(1)
        return Transaction(date_obj, -amount_float, cc_last_4)

    @staticmethod
    def match_date(s: str):
        return re.search(r'(\w+ \d{1,2}, \d{4})', s)

    @staticmethod
    def match_amount(s: str):
        return re.search(r'\$(\d+\.\d{2})', s)

    @staticmethod
    def match_credit_card(s: str):
        return re.search(r'ending in (\d{4}):', s)
