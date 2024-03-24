from enum import Enum

from selenium.webdriver.common.by import By as SelBy

from utils.loggers import get_logger

log = get_logger()


# noinspection SpellCheckingInspection

def log_return_decorator(func):
    def wrapper(*args, **kwargs):
        log.info(f'{func.__name__}({args[0]})')
        result = func(*args, **kwargs)
        log.info(f'{func.__name__}({args[0]}) returned: {result}')
        return result

    return wrapper


class By(Enum):
    def __init__(self, by: str = None, get_by_value_func=None):
        self.by = by
        self.get_by_value_func = get_by_value_func

    ID = (SelBy.CSS_SELECTOR, lambda tag, value: f"{tag}#{value}")
    CLASS = (SelBy.CSS_SELECTOR, lambda tag, value: f"{tag}.{value}")
    CSS = (SelBy.CSS_SELECTOR, lambda tag, value: value)
    XPATH = (SelBy.XPATH, lambda tag, value: value)
    TAG = (SelBy.TAG_NAME, lambda tag, value: tag)
    POSITION = (SelBy.CSS_SELECTOR, lambda tag, value: f"{tag}:nth-of-type({value})")

    def get_by_value(self, tag, value):
        return self.by, self.get_by_value_func(tag, value)


class Node:
    pass


class Variable(Node):
    def __init__(self, name, attr):
        self.attr = attr
        self.name = name

    @log_return_decorator
    def scrape(self, element):
        attribute = element.get_attribute(self.attr)
        if attribute is None:
            log.error(f"No attribute {self.attr} found for {self.name}")
        return {self.name: attribute.strip()}

    def __str__(self):
        return f"Var({self.name}, {self.attr!s})"


class Tag(Node):
    def __init__(self, tag, by: By = By.TAG, value=None, contents=None):
        self.tag = tag
        (self.by, self.value) = by.get_by_value(tag, value)
        self.children = contents if isinstance(contents, list) else [contents]

    @log_return_decorator
    def scrape(self, parent):
        elements = self.find_elements(parent)
        if (elements is None) or (len(elements) == 0):
            log.error(f"No elements found for {self}")
            return None
        return {k: v for e in elements for n in self.children for k, v in n.scrape(e).items()}

    def find_elements(self, parent):
        try:
            return parent.find_elements(self.by, self.value)
        except Exception as e:
            log.error(f"Unexpected error trying to find elements by {self.by}, {self.value}: " + str(e))

    def __str__(self):
        return f"<{self.tag} {self.by!s}='{self.value}'>"


class Div(Tag):
    def __init__(self, by: By = By.TAG, value=None, contents=None):
        super().__init__('div', by, value, contents)


class A(Tag):
    def __init__(self, by: By = By.TAG, value=None, contents=None):
        super().__init__('a', by, value, contents)
