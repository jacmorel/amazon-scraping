from enum import Enum

from selenium.webdriver.common.by import By as SelBy

from utils.loggers import get_logger

log = get_logger()


# noinspection SpellCheckingInspection

def log_return_decorator(func):
    def wrapper(*args, **kwargs):
        log.info(f'{func.__name__}({args})')
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
    def __init__(self, name=None):
        self.name = name


class CompositeNode(Node):
    def __init__(self, name: str = None, children=None):
        super().__init__(name)
        self.children = children if isinstance(children, list) else [children] or []


class Variable(Node):
    def __init__(self, name, attr):
        super().__init__(name)
        self.attr = attr

    @log_return_decorator
    def scrape(self, element):
        attribute = element.get_attribute(self.attr)
        if attribute is None:
            log.error(f"No attribute {self.attr} found for {self.name}")
        return {self.name: attribute.strip()}

    def __str__(self):
        return f"Var({self.name}, {self.attr!s})"


class ManyOf(CompositeNode):
    def __init__(self, name, children):
        super().__init__(name, children)
        assert len(self.children) == 1, "ManyOf can only have one child, got {}".format(len(children))

    @log_return_decorator
    def scrape(self, element):
        return {self.name: self.children[0].scrape(element)}

    def __str__(self):
        return f"Var({self.name}, {self.children!s})"


class Tag(CompositeNode):
    def __init__(self, tag, by: By = By.TAG, value=None, children=None):
        super().__init__(tag, children)
        (self.by, self.value) = by.get_by_value(self.name, value)
        self.children = children if isinstance(children, list) else [children]

    @log_return_decorator
    def scrape(self, parent):
        elements = self.find_elements(parent)
        if (elements is None) or (len(elements) == 0):
            log.error(f"No elements found for {self}")
            return None
        items = []
        for element in elements:
            attributes = self.process_element(element)
            items.append(attributes)
        return items[0] if len(items) == 1 else items
        # return {k: v for n in self.children for e in elements for k, v in self.process_element(e, n)}

    def process_element(self, element):
        attributes = {}
        for child in self.children:
            child_value = self.scrape_element(element, child)
            if isinstance(child_value, list):
                attributes.update({k: v for item in child_value for k, v in item.items()})
            else:
                attributes.update(child_value)
        return attributes

    @log_return_decorator
    def scrape_element(self, e, n):
        return n.scrape(e)

    def find_elements(self, parent):
        try:
            return parent.find_elements(self.by, self.value)
        except Exception as e:
            log.error(f"Unexpected error trying to find elements by {self.by}, {self.value}: " + str(e))

    def __str__(self):
        return f"<{self.name} {self.by!s}='{self.value}'>"

    def __repr__(self):
        return self.__str__()


class Div(Tag):
    def __init__(self, by: By = By.TAG, value=None, children=None):
        super().__init__('div', by, value, children)


class A(Tag):
    def __init__(self, by: By = By.TAG, value=None, children=None):
        super().__init__('a', by, value, children)
