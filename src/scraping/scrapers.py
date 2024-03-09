import itertools
import logging as log
import re
from datetime import datetime

from selenium.webdriver.chromium.webdriver import ChromiumDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.select import Select

from utils.objects import recursive_vars

ITEMS_SHIPPED = "Items shipped:"
ITEMS_SHIPPED_LEN = len(ITEMS_SHIPPED)


class Order:
    def __init__(self, order_number, details_link, invoice_link):
        self.order_number = order_number
        self.details_link = details_link
        self.invoice_link = invoice_link
        self.shipping_address = None
        self.payment_credit_card = None
        self.items_subtotal_amount = None
        self.shipping_amount = None
        self.total_before_tax_amount = None
        self.tax_amount = None
        self.grand_total_amount = None
        self.gift_card_amount = None
        self.items_refund_amount = None
        self.tax_refund_amount = None
        self.total_refund_amount = None
        self.transactions = None
        self.coupon_savings = None
        self.subscription_savings = None
        self.shipping_savings = None

    def __repr__(self):
        return f"Order(number={self.order_number!r}, details={self.details_link!r}, invoice={self.invoice_link!r})"


class Transaction:
    def __init__(self, date, amount, cc_last_4):
        self.date = date
        self.amount = amount
        self.cc_last_4 = cc_last_4

    def __repr__(self):
        return f"Transaction(date={self.date!r}, amount={self.amount!r}, cc_last_4={self.cc_last_4!r})"


class Address:
    def __init__(self, full_name, street, city_state_postal, country):
        self.full_name = full_name
        self.street = street
        self.city_state_postal = city_state_postal
        self.country = country


class Scraper:
    def __init__(self, driver_or_scraper):
        self.driver = driver_or_scraper.driver if isinstance(driver_or_scraper, Scraper) else driver_or_scraper

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

    def get_page(self, url):
        log.info("Loading page %s", url)
        self.driver.get(url)


class Login(Scraper):
    def __init__(self, driver_or_scraper, email, password):
        super().__init__(driver_or_scraper)
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


class OrderHistory(Scraper):
    def __init__(self, driver_or_scraper, order_detail_scraper=None):
        super().__init__(driver_or_scraper)
        self.order_detail_scraper = order_detail_scraper if order_detail_scraper is not None else OrderDetail(self)

    def get_orders(self, year="2024"):
        self.get_page("https://www.amazon.com/gp/your-account/order-history")
        self.filter_orders(year)
        return self.get_all_orders()

    def get_all_orders(self):
        orders = self.get_all_orders_from_history()
        for o in orders:
            self.order_detail_scraper.populate(o)
        return orders

    def get_all_orders_from_history(self):
        orders = [self.get_current_page_orders()]
        iterator = PageIterator(self)
        for page in iterator:
            orders.append(self.get_current_page_orders())
        return list(itertools.chain(*orders))

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
                      self.get_order_details_link(element),
                      self.get_order_invoice_link(element))
        log.info("Added order number: %s", order.order_number)
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

    @staticmethod
    def get_order_invoice_link(order_card):
        element = order_card.find_element(By.LINK_TEXT, 'View invoice')
        return element.get_property("href")


class PageIterator(Scraper):
    def __init__(self, scraper):
        super().__init__(scraper)

    def __iter__(self):
        return self

    def __next__(self):
        next_link = self.get_next_page_link()
        if next_link is None:
            raise StopIteration
        else:
            self.get_page(next_link)

    def get_next_page_link(self):
        arefs = self.find_elements_by_xpath("//a[contains(text(), 'Next')]")
        if len(arefs) == 0:
            return None
        return arefs[0].get_attribute("href")


class OrderDetail(Scraper):
    def __init__(self, driver_or_scraper):
        super().__init__(driver_or_scraper)
        self.order = None

    def populate(self, order: Order):
        self.order = order
        log.info("Populating order %s", order.order_number)
        self.go_to_order_details()
        self.populate_summary()
        self.populate_transactions()
        self.populate_address()
        self.populate_payment()
        log.info("order = %s", recursive_vars(self.order))

    def go_to_order_details(self):
        self.get_page(self.order.details_link)

    def populate_payment(self):
        div_text = self.find_element_by_css('div.pmts-payments-instrument-details').text

        match = re.search(r"ending in (\d+)", div_text)

        payment_cc = None
        if match:
            payment_cc = match.group(1)
        self.order.payment_credit_card = payment_cc

    def populate_address(self):
        full_name = self.find_element_by_css(".displayAddressFullName").text
        street = self.find_element_by_css(".displayAddressAddressLine1").text
        city_state_postal = self.find_element_by_css(".displayAddressCityStateOrRegionPostalCode").text
        country = self.find_element_by_css(".displayAddressCountryName").text
        self.order.shipping_address = Address(full_name, street, city_state_postal, country)

    AMOUNT_MAPPINGS = {
        # Title                              Field                      Negate?
        "Item(s) Subtotal:":                ["items_subtotal_amount",   False],
        "Shipping & Handling:":             ["shipping_amount",         False],
        "Total before tax:":                ["total_before_tax_amount", False],
        "Estimated tax to be collected:":   ["tax_amount",              False],
        "Gift Card Amount:":                ["gift_card_amount",        True],
        "Grand Total:":                     ["grand_total_amount",      False],
        "Item(s) refund:":                  ["items_refund_amount",     False],
        "Tax refund:":                      ["tax_refund_amount",       False],
        "Refund Total:":                    ["total_refund_amount",     False],
        "Refund Total":                     ["total_refund_amount",     False],
        "Your Coupon Savings:":             ["coupon_savings",          True],
        "Subscribe & Save:":                ["subscription_savings",    True],
        "Free Shipping:":                   ["shipping_savings",        True],
    }

    def populate_summary(self):
        amounts_divs = self.find_elements_by_xpath('//div[@id="od-subtotals"]//div[@class="a-row"]')
        for amount_div in amounts_divs:
            try:
                log.debug("Processing amount div: %s", amount_div.get_attribute("outerHTML"))
                title_div = self.find_element_by_xpath('(./div/span)[1]', amount_div)
                title_div_children = self.find_elements_by_xpath('./*', title_div)
                if len(title_div_children) == 0:
                    title = title_div.text.strip()
                else:
                    title = title_div_children[0].text.strip()
                value = (self.find_element_by_xpath('(./div/span)[2]', amount_div).
                         text.strip().replace("$", ""))
                self.increment_field_value(self.AMOUNT_MAPPINGS[title], float(value))
            except Exception as e:
                log.error("Problem on order '%s' getting amount '%s' of '%s': %s(%s)",
                          self.order.order_number, title, value, type(e).__name__, str(e))

    def increment_field_value(self, args, value):
        field_name = args[0]
        negate = args[1]
        field_value = getattr(self.order, field_name)
        negated_value = -value if negate else value
        incremented_value = negated_value if field_value is None else float(field_value) + negated_value
        setattr(self.order, field_name, incremented_value)
        log.debug("Setting field '%s' to '%s'", field_name, getattr(self.order, field_name))

    def populate_transactions(self):
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
        self.order.transactions = transactions

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
