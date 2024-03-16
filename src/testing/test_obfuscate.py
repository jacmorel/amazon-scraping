import os
import tempfile

import pytest

from testing.obfuscate import Obfuscator

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


@pytest.fixture(scope="function")
def obfuscator():
    return Obfuscator(f"{BASE_DIR}/test_obfuscate.yaml")


@pytest.mark.parametrize("test_case, content, expected", [
    ["Simple 1 line", "This is John Smith's dog", "This is Harry Potter's dog"],
    ["Simple different casing", "This is JOHN SMITH's dog", "This is Harry Potter's dog"],
    ["White space characters within to replace string", "Tom \n\t     \r  Rye's Nimbus 2000 is fast",
     "Hermione Granger's Nimbus 2000 is fast"],
    ["Multi instances of to replace string", "'Tom \n\t     \r  Rye' is the same as \n 'Tom Rye'",
     "'Hermione Granger' is the same as \n 'Hermione Granger'"]
])
def test_obfuscate_strings(test_case, content, expected, obfuscator):
    output = obfuscator.obfuscate_string(content)
    assert output == expected, test_case


@pytest.mark.parametrize("test_case, content, expected", [
    ["Simple order number",
     "132-4354234-3452343",
     "345-1234567-0000001"],
    ["2 order number x 1",
     "132-4354234-3452343\n 143-2345233-2352345",
     "345-1234567-0000001\n 345-1234567-0000002"],
    ["2 order number x 2",
     "132-4354234-3452343\n 143-2345233-2352345132-4354234-3452343\n143-2345233-2352345",
     "345-1234567-0000001\n 345-1234567-0000002345-1234567-0000001\n345-1234567-0000002"],
])
def test_obfuscate_order_numbers(test_case, content, expected, obfuscator):
    output = obfuscator.obfuscate_string(content)
    assert output == expected, test_case


file_content = """
    John Smith and Tom Rye are friends and share an Amazon Prime account. 
    Their account includes orders 132-1231232-5243832 and 432-2342432-9850929 but
    432-2342432-9850929 is John Smith and 132-1231232-5243832 is Tom Rye's
"""
obfuscated_content = """
    Harry Potter and Hermione Granger are friends and share an Amazon Prime account. 
    Their account includes orders 345-1234567-0000001 and 345-1234567-0000002 but
    345-1234567-0000002 is Harry Potter and 345-1234567-0000001 is Hermione Granger's
"""


def test_obfuscate(obfuscator):
    name = write_temp_file(file_content)

    assert_file_content_equal("before", name, file_content)
    try:
        obfuscator.obfuscate(name)

        assert_file_content_equal("after", name, obfuscated_content)
        assert_file_content_equal("backup", name + ".bak", file_content)
    finally:
        os.remove(name + ".bak")


def assert_file_content_equal(message, file_name, expected_content):
    output = read_file(file_name)
    assert output == expected_content, message + " {file_name}"


def read_file(name):
    with open(name) as output_file:
        return output_file.read()


def write_temp_file(content):
    with tempfile.NamedTemporaryFile("w", delete=False) as input_file:
        input_file.write(content)
        return input_file.name
