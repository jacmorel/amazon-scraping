import os
import subprocess
import sys
import tempfile
from unittest.mock import patch, Mock

import pytest

from testing.obfuscate import Obfuscator, run

TEST_BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(os.path.dirname(TEST_BASE_DIR))
SRC_BASE_DIR = os.path.join(ROOT_DIR, "src", "testing")


@pytest.fixture(scope="function")
def obfuscator():
    return Obfuscator(True, f"{TEST_BASE_DIR}/test_obfuscate.yaml")


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


def test_run_processes_command_line_args():
    sys.argv = ['obfuscate.py', "-r", "-i", "init.yaml", "-s", "state.yaml", "file_to_obfuscate.html"]

    mock_obfuscator = Mock()
    with patch("testing.obfuscate.Obfuscator") as mock_obfuscator_ctor:
        mock_obfuscator_ctor.return_value = mock_obfuscator

        run()

        mock_obfuscator_ctor.assert_called_once_with(True, "init.yaml", "state.yaml")
        mock_obfuscator.obfuscate.assert_called_once_with("file_to_obfuscate.html")


@pytest.mark.parametrize(
    "test_case, init_file_content, state_file_content, reset_numbers, expected_names, expected_last_order_number, expected_numbers",
    [
        ["2 strings, no orders", '''
                strings:
                  Name One: Name 1
                  Name Two: Name 2
        ''', "", False, {"Name One": "Name 1", "Name Two": "Name 2"}, 0, {}],
        ["no last_number set", "", "", False, {}, 0, {}],
        ["last_number&numbers set, reset number", "", '{"orders":{"last_number": 5, "numbers":{"1":"1001"}}}', True, {},
         0, {}],
        ["last_number&numbers set, no reset number", "", '{"orders":{"last_number": 4, "numbers":{"1":"1001"}}}', False,
         {}, 4, {"1": "1001"}],
    ])
def test_init(test_case, init_file_content, state_file_content, reset_numbers, expected_names,
              expected_last_order_number,
              expected_numbers):
    init_file = write_temp_file(init_file_content)
    state_file = write_temp_file(state_file_content)
    o = Obfuscator(reset_numbers, init_file, state_file)
    assert o.names == expected_names
    assert o.order_numbers == expected_numbers
    assert o.last_order_number == expected_last_order_number


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


def test_obfuscate_backups_file_and_obfuscates_it(obfuscator):
    name = write_temp_file(file_content)

    assert_file_content_equal("before", name, file_content)
    try:
        obfuscator.obfuscate(name)

        assert_file_content_equal("after", name, obfuscated_content)
        assert_file_content_equal("backup", name + ".bak", file_content)
    finally:
        os.remove(name + ".bak")


class TestFiles:
    def __init__(self):
        self.files = []

    def __enter__(self):
        file1 = self.add_file(write_temp_file("Order 1: 001-4345923-1194323\nOrder 2: 002-4345923-1094324"))
        file2 = self.add_file(write_temp_file(
            "Order 3: 003-4625923-6343267\nOrder 1: 001-4345923-1194323\nOrder 4: 004-3074566-1284398"))
        state_file = self.add_file(write_temp_file(""))
        os.remove(state_file)
        return file1, file2, state_file

    def __exit__(self, exc_type, exc_val, exc_tb):
        try:
            assert_file_content_equal("file 1", self.files[0],
                                      "Order 1: 345-1234567-0000001\nOrder 2: 345-1234567-0000002")
            assert_file_content_equal("file 2", self.files[1],
                                      "Order 3: 345-1234567-0000003\nOrder 1: 345-1234567-0000001\nOrder 4: 345-1234567-0000004")
        finally:
            for file in self.files:
                remove_if_exists(file)

    def add_file(self, file):
        self.files.append(file)
        return file


def test_obfuscate_continues_incrementing_order_number_between_invocations():
    with TestFiles() as (file1, file2, state_file):
        Obfuscator(state_file_name=state_file).obfuscate(file1)
        Obfuscator(state_file_name=state_file).obfuscate(file2)
        assert_file_content_equal("state_file", state_file, '''orders:
  last_number: 4
  numbers:
    001-4345923-1194323: 345-1234567-0000001
    002-4345923-1094324: 345-1234567-0000002
    003-4625923-6343267: 345-1234567-0000003
    004-3074566-1284398: 345-1234567-0000004
''')


def test_obfuscate_end_2_end():
    with TestFiles() as (file1, file2, state_file):
        subprocess.run(['python3', SRC_BASE_DIR + "/obfuscate.py", file1, "-r"])
        subprocess.run(['python3', SRC_BASE_DIR + "/obfuscate.py", file2])


def remove_if_exists(file):
    if os.path.exists(file):
        os.remove(file)


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
