from selenium.webdriver.common.by import By

from utils.loggers import get_logger

log = get_logger(__name__)


# noinspection SpellCheckingInspection

class Node:
    pass


class Variable(Node):
    def __init__(self, name, attr):
        self.attr = attr
        self.name = name

    def scrape(self, element):
        attribute = element.get_attribute(self.attr)
        if attribute is None:
            log.error(f"No attribute {self.attr} found for {self.name}")
        return {self.name: attribute.strip()}


class Tag(Node):
    def __init__(self, name, by: By = None, value: str = None, contents=None):
        self.value = value
        self.name = name
        self.by = by
        self.children = contents if isinstance(contents, list) else [contents]

    def scrape(self, parent):
        elements = parent.find_elements(self.by, self.value)
        if (elements is None) or (len(elements) == 0):
            log.error(f"No elements found for {self}")
            return None
        return [n.scrape(elements[0]) for n in self.children][0]

    def __str__(self):
        return f"<{self.name} {self.by!s}='{self.value}'>"


class Div(Tag):
    def __init__(self, by: By = None, value: str = None, contents=None):
        super().__init__('div', by, value, contents)
