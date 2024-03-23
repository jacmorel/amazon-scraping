import os
import tempfile


def read_file(name):
    with open(name) as output_file:
        return output_file.read()


def write_temp_file(content, extension="txt"):
    extension = extension if extension.startswith(".") else "." + extension
    with tempfile.NamedTemporaryFile("w", suffix=extension, delete=False) as input_file:
        input_file.write(content)
        return input_file.name


def assert_file_content_equal(message, file_name, expected_content):
    output = read_file(file_name)
    assert output == expected_content, message + " " + file_name


def remove_if_exists(file):
    if os.path.exists(file):
        os.remove(file)
