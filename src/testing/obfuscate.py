import re
import shutil
import sys

import yaml


class Obfuscator:

    def __init__(self, init_file_name="obfuscate.yaml"):
        self.names = self.load(init_file_name)
        self.order_number_map = {}

    @staticmethod
    def load(init_file_name):
        with open(init_file_name, 'r') as init_file:
            init_values = yaml.load(init_file, Loader=yaml.FullLoader)
        return init_values["strings"]

    ORDER_NUMBER_PATTERN = re.compile("\\d{3}-\\d{7}-\\d{7}")

    def obfuscate_order_numbers(self, contents):
        for match in self.ORDER_NUMBER_PATTERN.finditer(contents):
            order_number = match.group()
            if order_number not in self.order_number_map:
                self.order_number_map[order_number] = self.generate_order_number()
        contents = self.ORDER_NUMBER_PATTERN.sub(lambda m: self.order_number_map[m.group()], contents)
        return contents

    def generate_order_number(self):
        return '345-1234567-{:07}'.format(len(self.order_number_map)+1)

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

    def obfuscate(self, name):
        output_file_name = name
        input_file_name = name + ".bak"
        shutil.copy(output_file_name, input_file_name)

        with open(input_file_name, 'r') as input_file:
            input_file_contents = input_file.read()
            output_file_contents = self.obfuscate_string(input_file_contents)
            with open(output_file_name, 'w') as output_file:
                output_file.write(output_file_contents)


if __name__ == '__main__':
    Obfuscator().obfuscate(sys.argv[1])
