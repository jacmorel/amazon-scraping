from selenium.webdriver.chromium.webdriver import ChromiumDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

class Scraper:
    def __init__(self, driver: ChromiumDriver):
        self.driver = driver

    def find_element_by_id(self, value):
        return self.driver.find_element(by=By.ID, value=value)

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


class OrderHistory(Scraper):
    def get_orders(self):
        self.driver.get("https://www.amazon.com/gp/your-account/order-history")

        self.wait_for_input()

        orderFilter = Select(self.find_element_by_id("time-filter"))
        orderFilter.select_by_visible_text("2024")
        orderFilterForm = self.find_element_by_id("time-filter")
        orderFilterForm.submit()

        self.wait_for_input()

        elements = self.driver.find_elements(by=By.CLASS_NAME, value="order")
        for element in elements:
            element.find_element(by=By.XPATH, value="")
            print(element.text)
            print("\n\n\n")
