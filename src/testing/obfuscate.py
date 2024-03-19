import argparse
import glob
import os
import re
import shutil

import yaml

DEFAULT_STATE_FILE_NAME = ".obfuscate.yaml"
DEFAULT_INIT_FILE_NAME = "obfuscate.yaml"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


class Obfuscator:

    def __init__(self, reset_numbers=False, init_file_name=DEFAULT_INIT_FILE_NAME,
                 state_file_name=DEFAULT_STATE_FILE_NAME):
        self.init_file_path = self.get_local_or_install_path("init file", init_file_name, DEFAULT_INIT_FILE_NAME, True)
        self.state_file_path = self.get_local_or_install_path("state file", state_file_name, DEFAULT_STATE_FILE_NAME,
                                                              False)
        self.order_numbers = {}
        self.names = {}
        self.last_order_number = 0
        self.load_init_file()
        self.load_state_file(reset_numbers)

    @staticmethod
    def get_local_or_install_path(file_type, file_name, default_file, throw_if_not_found=False):
        if os.path.isfile(file_name):
            return file_name
        local_init_file = f"{BASE_DIR}/{file_name}"
        if os.path.isfile(local_init_file):
            return local_init_file
        if os.path.isdir(file_name):
            return file_name + "/" + default_file
        if os.path.isdir(local_init_file):
            return file_name + "/" + default_file
        if throw_if_not_found:
            raise FileNotFoundError(f"Could not find {file_type} either {file_name} or {local_init_file}")
        return file_name

    def load_init_file(self):
        with open(self.init_file_path, 'r') as init_file:
            init_values = yaml.load(init_file, Loader=yaml.FullLoader)
        if init_values is None:
            return
        self.names = init_values.get("strings", {})

    def load_state_file(self, reset_numbers):
        if reset_numbers or not os.path.isfile(self.state_file_path):
            return
        with open(self.state_file_path, 'r') as state_file:
            state = yaml.load(state_file, Loader=yaml.FullLoader)
        if state is None:
            return
        if (orders := state.get("orders", {})) is not None:
            self.last_order_number = orders.get("last_number", 0)
            self.order_numbers = orders.get("numbers", {})

    def save_state_file(self):
        state = {
            "orders": {
                "last_number": self.last_order_number,
                "numbers": self.order_numbers
            }
        }
        yaml_str = yaml.dump(state, default_flow_style=False)
        self.save_backup(self.state_file_path)
        with open(self.state_file_path, 'w') as state_file:
            state_file.write(yaml_str)

    ORDER_NUMBER_PATTERN = re.compile("\\d{3}-\\d{7}-\\d{7}")

    def obfuscate_order_numbers(self, contents):
        for match in self.ORDER_NUMBER_PATTERN.finditer(contents):
            order_number = match.group()
            if order_number not in self.order_numbers:
                self.order_numbers[order_number] = self.generate_order_number()
        contents = self.ORDER_NUMBER_PATTERN.sub(lambda m: self.order_numbers[m.group()], contents)
        return contents

    def generate_order_number(self):
        self.last_order_number += 1
        return '345-1234567-{:07}'.format(self.last_order_number)

    def obfuscate_strings(self, contents):
        for name, replacement in self.names.items():
            regex_string = name.replace(" ", "\\s+")
            regex = re.compile(regex_string, re.IGNORECASE)
            contents = re.sub(regex, replacement, contents)
        return contents

    def obfuscate_string(self, contents):
        contents = self.obfuscate_strings(contents)
        contents = self.obfuscate_order_numbers(contents)
        return contents

    def obfuscate_file(self, name):
        with open(name, 'r') as input_file:
            input_file_contents = input_file.read()

        output_file_contents = self.obfuscate_string(input_file_contents)

        self.save_backup(name)
        with open(name, 'w') as output_file:
            output_file.write(output_file_contents)

    @staticmethod
    def save_backup(name):
        if not os.path.exists(name):
            return
        backup_name = name + ".bak"
        shutil.copy(name, backup_name)
        return backup_name

    def obfuscate(self, name):
        files = sorted(glob.glob(name))
        for file in files:
            self.obfuscate_file(file)
        self.save_state_file()


def run():
    parser = argparse.ArgumentParser(description='A simple argument parser')
    parser.add_argument('-r', '--reset_number', action='store_true', help='reset order numbers')
    parser.add_argument('-i', '--init_file', type=str, help='path to the yaml init file',
                        default=DEFAULT_INIT_FILE_NAME)
    parser.add_argument('-s', '--state_file', type=str, help='path to the yaml state file',
                        default=DEFAULT_STATE_FILE_NAME)
    parser.add_argument('files', type=str, help='file pattern/file path to obfuscate. Examples: "test_files*.html" (note the quotes are needed), test.html...')
    args = parser.parse_args()
    obfuscator = Obfuscator(args.reset_number, args.init_file, args.state_file)
    obfuscator.obfuscate(args.files)


if __name__ == '__main__':
    run()
