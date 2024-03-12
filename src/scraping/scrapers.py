import itertools
import logging
import re
from datetime import datetime
from time import sleep

from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.wait import WebDriverWait

from scraping.model import Address, Transaction, Order
from utils.objects import recursive_vars
from utils.perf import Timing

ITEMS_SHIPPED = "Items shipped:"
ITEMS_SHIPPED_LEN = len(ITEMS_SHIPPED)

log = logging.getLogger("scraping")


class Scraper:
    def __init__(self, driver_or_scraper):
        self.driver = driver_or_scraper.driver if isinstance(driver_or_scraper, Scraper) else driver_or_scraper

    def find_element_safely(self, by: By, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.driver_if_null(parent).find_element(by, value)
        except NoSuchElementException:
            return None

    def find_element_by_id(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.ID, value=value)

    def find_element_by_id_safely(self, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.find_element_by_id(value, parent)
        except NoSuchElementException:
            return None

    def find_element_by_name(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.NAME, value=value)

    def find_element_by_name_safely(self, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.find_element_by_name(value, parent)
        except NoSuchElementException:
            return None

    def find_element_by_tag(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.TAG_NAME, value=value)

    def find_element_by_tag_safely(self, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.find_element_by_tag(value, parent)
        except NoSuchElementException:
            return None

    def find_element_by_class(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.CLASS_NAME, value=value)

    def find_element_by_class_safely(self, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.find_element_by_class(value, parent)
        except NoSuchElementException:
            return None

    def find_element_by_css(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.CSS_SELECTOR, value=value)

    def find_element_by_css_safely(self, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.find_element_by_css(value, parent)
        except NoSuchElementException:
            return None

    def find_element_by_xpath(self, value: str, parent: WebElement = None) -> WebElement:
        return self.driver_if_null(parent).find_element(by=By.XPATH, value=value)

    def find_element_by_xpath_safely(self, value: str, parent: WebElement = None) -> WebElement:
        try:
            return self.find_element_by_xpath(value, parent)
        except NoSuchElementException:
            return None

    def find_elements_by_class(self, value: str) -> [WebElement]:
        return self.driver.find_elements(by=By.CLASS_NAME, value=value)

    def find_elements_by_xpath(self, value: str, parent: WebElement = None) -> [WebElement]:
        return self.driver_if_null(parent).find_elements(by=By.XPATH, value=value)

    def driver_if_null(self, parent):
        return parent if parent else self.driver

    # noinspection PyMethodMayBeStatic
    def wait_for_input(self):
        input("Press Enter to continue: ")

    def get_page(self, url, wait_args=None):
        log.info("Loading page %s", url)
        with Timing(f"Loading page {url}", True):
            self.driver.get(url)
            self.wait_for_page_load(wait_args)

    def wait_for_page_load(self, args=None):
        if args is None:
            args = [By.TAG_NAME, "body"]
        WebDriverWait(self.driver, 10).until(lambda x: x.find_element(*args))


class ScrapingContext(Scraper):
    def __init__(self, by, value, driver_or_scraper):
        super().__init__(driver_or_scraper)
        self.value = value
        self.by = by
        self.parent = None

    def __enter__(self):
        try:
            parent = self.driver.find_element(by=self.by, value=self.value)
        except NoSuchElementException:
            parent = None

        self.driver = parent

    def __exit__(self):
        try:
            parent = self.driver.find_element(by=self.by, value=self.value)
        except NoSuchElementException:
            parent = None

        self.driver = parent


CAPTCHA1 = [By.ID, "captchacharacters"]
CAPTCHA2 = [By.NAME, "cvf_captcha_input"]


class Login(Scraper):
    def __init__(self, driver_or_scraper, email, password):
        super().__init__(driver_or_scraper)
        self.email = email
        self.password = password
        self.test_captcha = False

    def login(self):
        homePage = 'https://www.amazon.com'
        self.get_page(homePage)

        self.handle_captcha(*CAPTCHA1)

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

        self.handle_captcha(*CAPTCHA2)

    def handle_captcha(self, by, input_name):
        captcha_input = self.find_element_safely(by, input_name)
        if captcha_input is None:
            return
        image = self.driver.find_element(By.TAG_NAME, "img").get_attribute("src")
        image_driver = self.create_driver()

        try:
            image_driver.get(image)
            response = input("Please enter image characters: ")
            captcha_input.send_keys(response)
            captcha_input.submit()
        finally:
            image_driver.quit()

        self.wait_for_input()

    @staticmethod
    def create_driver():
        return webdriver.Chrome()


class OrderHistory(Scraper):
    def __init__(self, driver_or_scraper, order_detail_scraper=None):
        super().__init__(driver_or_scraper)
        self.order_detail_scraper = order_detail_scraper if order_detail_scraper is not None else OrderDetail(self)

    def get_all_orders(self, years=None, full_orders=True):
        if years is None:
            years = ["2024"]
        self.get_page("https://www.amazon.com/gp/your-account/order-history")
        orders = []
        for year in years:
            self.filter_orders(year)
            orders.append(self.get_orders_from_history())
        if full_orders:
            self.get_orders_details(list(itertools.chain(*orders)))
        return orders

    def get_orders_from_history(self):
        orders = [self.get_current_page_orders()]
        iterator = PageIterator(self, [By.ID, "rhf"])
        for page in iterator:
            orders.append(self.get_current_page_orders())
        return list(itertools.chain(*orders))

    def get_orders_details(self, orders):
        order_count = len(orders)
        log.info("Populating %d orders" % order_count)
        for i, o in enumerate(orders):
            log.info("Populating order #%d/%d: %s", i, order_count, o.number)
            self.order_detail_scraper.populate(o)
        return orders

    def filter_orders(self, time_filter):
        orderFilter = Select(self.find_element_by_id("time-filter"))
        orderFilter.select_by_visible_text(time_filter)
        orderFilterForm = self.find_element_by_id("time-filter")
        orderFilterForm.submit()

    def get_current_page_orders(self):
        elements = self.find_elements_by_class("order-card")
        orders = [self.get_order_card(e) for e in elements]
        return orders

    def get_order_card(self, element):
        order = Order(self.get_order_number(element),
                      self.get_ordered_date(element),
                      self.get_order_details_link(element),
                      self.get_order_invoice_link(element))
        log.info("Added order number: %s", order.number)
        return order

    def get_order_number(self, order_card):
        element = self.find_element_by_css_safely(".yohtmlc-order-id .a-color-secondary.value bdi", order_card)
        if element is None:
            log.error("Order number could not be found: " + order_card.text)
            return None
        return element.text

    def get_ordered_date(self, order_card):
        element = self.find_element_by_xpath_safely(
            ".//span[contains(text(), 'Order placed')]/../following-sibling::*[1]", order_card)
        if element is None:
            log.error("Order date could not be found")
            return None
        date_string = element.text
        try:
            return datetime.strptime(date_string, "%B %d, %Y")
        except ValueError as e:
            log.error("Order date could not be parsed: %s", e)
            return date_string

    def get_order_details_link(self, order_card):
        element = self.find_element_by_class_safely("yohtmlc-order-details-link", order_card)
        if element is None:
            log.error("Details link could not be found")
            return None
        else:
            return element.get_property("href")

    def get_order_invoice_link(self, order_card):
        element = self.find_element_safely(By.LINK_TEXT, 'View invoice', order_card)
        if element is None:
            element = self.find_element_safely(By.LINK_TEXT, 'Invoice', order_card)  # French order
        elif element is None:
            log.error("Invoice link could not be found")
            return None
        else:
            return element.get_property("href")


class PageIterator(Scraper):
    def __init__(self, scraper, wait_args=None):
        super().__init__(scraper)
        self.wait_args = wait_args

    def __iter__(self):
        return self

    def __next__(self):
        next_link = self.get_next_page_link()
        if next_link is None:
            raise StopIteration
        else:
            self.get_page(next_link, self.wait_args)

    def get_next_page_link(self):
        arefs = self.find_elements_by_xpath("//ul[@class='a-pagination']//a[starts-with(text(), 'Next')]")
        if len(arefs) == 0:
            return None
        return arefs[0].get_attribute("href")


class OrderDetail(Scraper):
    def __init__(self, driver_or_scraper):
        super().__init__(driver_or_scraper)
        self.summary_div = None
        self.order = None

    def populate(self, order: Order):
        self.order = order
        self.go_to_order_details()
        with Timing():
            self.populate_summary()
        log.info("order = %s", recursive_vars(self.order))

    def populate_summary(self):
        summary_div = self.find_element_by_css("[data-component='paymentDetails'")
        self.populate_payment_method(summary_div)
        self.populate_payment_summary(summary_div)
        self.populate_transactions(summary_div)
        self.populate_address(summary_div)

    def go_to_order_details(self):
        self.get_page(self.order.details_link)

    def populate_payment_method(self, summary_div):
        payment_blocks = self.find_elements_by_xpath(".//*[contains(text(), 'Payment ')]", summary_div)
        if len(payment_blocks) == 0:
            log.error("Order #%s: Could not find any payment method", self.order.number)
            return

        payment_method_title_element = payment_blocks[0]
        if payment_method_title_element.text.strip().lower() != "payment method":
            log.error("Order #%s: Could not find any payment method", self.order.number)
            return

        parent = self.find_element_by_xpath("../..", payment_method_title_element)

        div_text = parent.text

        match = re.search(r"ending in (\d+)", div_text)
        if match:
            payment_cc = match.group(1)
        elif "Gift Card" in div_text:
            payment_cc = "Gift Card"
        elif "Amazon gift card balance" in div_text:
            payment_cc = "Gift Card Balance"
        else:
            payment_cc = div_text

        self.order.payment_credit_card = payment_cc

    def populate_address(self, summary_div):
        self.order.recipient = self.find_element_by_css(".displayAddressFullName", summary_div).text
        street = self.find_element_by_css(".displayAddressAddressLine1", summary_div).text
        city_state_postal = self.find_element_by_css(".displayAddressCityStateOrRegionPostalCode", summary_div).text
        country = self.find_element_by_css(".displayAddressCountryName", summary_div).text
        self.order.shipping_address = Address(street, city_state_postal, country)

    AMOUNT_MAPPINGS = {
        # Title                              Field                      Negate?
        "Item(s) Subtotal:": ["items_subtotal_amount", False],
        "Shipping & Handling:": ["shipping_amount", False],
        "Total before tax:": ["total_before_tax_amount", False],
        "Estimated tax to be collected:": ["tax_amount", False],
        "Gift Card Amount:": ["gift_card_amount", True],
        "Grand Total:": ["grand_total_amount", False],
        "Item(s) refund:": ["items_refund_amount", False],
        "Tax refund:": ["tax_refund_amount", False],
        "Refund Total:": ["total_refund_amount", False],
        "Refund Total": ["total_refund_amount", False],
        "Your Coupon Savings:": ["coupon_savings", True],
        "Subscribe & Save:": ["subscription_savings", True],
        "Free Shipping:": ["shipping_savings", True],
        "Rewards Points:": ["rewards_amount", True],
        "Courtesy Credit:": ["courtesy_credit_amount", True]
    }

    def populate_payment_summary(self, summary_div):
        amounts_divs = self.find_elements_by_xpath('.//div[@id="od-subtotals"]//div[@class="a-row"]', summary_div)
        for amount_div in amounts_divs:
            try:
                log.debug("Processing amount div: %s", amount_div.get_attribute("outerHTML"))
                title_div = self.find_element_by_xpath('(./div/span)[1]', amount_div)
                title_div_children = self.find_elements_by_xpath('./*', title_div)
                if len(title_div_children) == 0:
                    title = title_div.text.strip()
                else:
                    title = title_div_children[0].text.strip()
                if len(title) == 0:
                    continue
                value = self.find_element_by_xpath('(./div/span)[2]', amount_div).text
                self.increment_field_value(self.AMOUNT_MAPPINGS[title], self.to_float(value))
            except Exception as e:
                log.error("Problem on order '%s' getting amount '%s' of '%s': %s(%s)",
                          self.order.number, title, value, type(e).__name__, str(e))

    def increment_field_value(self, args, value):
        field_name = args[0]
        negate = args[1]
        field_value = getattr(self.order, field_name)
        negated_value = -value if negate else value
        incremented_value = negated_value if field_value is None else float(field_value) + negated_value
        setattr(self.order, field_name, incremented_value)
        log.debug("Setting field '%s' to '%s'", field_name, getattr(self.order, field_name))

    def populate_transactions(self, summary_div):
        transactions_divs = self.find_elements_by_xpath(".//span[contains(text(),'Transactions')]/../../div",
                                                        summary_div)
        if len(transactions_divs) == 0:
            return
        else:
            transactions_div = transactions_divs[0]
        transactions_spans = self.find_elements_by_xpath(".//div[contains(@class,'a-row')]",
                                                         transactions_div)
        lines = [e.get_attribute("outerText").strip().replace("\n", "") for e in transactions_spans]
        transactions = []
        i = 0
        tx = None
        while i < len(lines):
            line = lines[i]
            if line.startswith("Refund:"):
                tx = self.extract_refund(line)
            elif line.startswith(ITEMS_SHIPPED):
                if line == ITEMS_SHIPPED:
                    i += 1
                    line = lines[i]
                else:
                    line = line.replace(ITEMS_SHIPPED, "")
                tx = self.extract_payment(line)
            else:
                log.error("Order # %s: could not parse transaction '%s'", self.order.number, line)
            if tx is not None:
                transactions.append(tx)
            i += 1
        self.order.transactions = transactions

    def extract_refund(self, line):
        date_match = self.match_date(line)
        amount_match = self.match_amount(line)
        if not date_match or not amount_match:
            log.error("Could not parse Refund for order %s: '%s'", self.order.number, line)
            return Transaction(None, 0, "Unparseable refund: " + line)
        date_obj = datetime.strptime(date_match.group(1), '%B %d, %Y')
        amount_float = self.to_float(amount_match.group(1))
        return Transaction(date_obj, amount_float, None)

    def extract_payment(self, line):
        date_match = self.match_date(line)
        amount_match = self.match_amount(line)
        cc_last_4_match = self.match_credit_card(line)
        if not date_match or not amount_match or not cc_last_4_match:
            log.error("Could not parse Payment for order %s: '%s'", self.order.number, line)
            return Transaction(None, 0, "Unparseable payment: " + line)
        date_obj = datetime.strptime(date_match.group(1), '%B %d, %Y')
        amount_float = self.to_float(amount_match.group(1))
        cc_last_4 = cc_last_4_match.group(1)
        return Transaction(date_obj, -amount_float, cc_last_4)

    @staticmethod
    def to_float(float_string):
        return float(float_string.replace(",", "").replace("$", "").strip())

    @staticmethod
    def match_date(s: str):
        return re.search(r'(\w+ \d{1,2}, \d{4})', s)

    @staticmethod
    def match_amount(s: str):
        return re.search(r'\$([0-9,]+\.\d{2})', s)

    @staticmethod
    def match_credit_card(s: str):
        return re.search(r'ending in (\d{4}):', s)
