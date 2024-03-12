import json

from scraping.utils import write_csv_output_file


def run():
    with open("output/orders_2024.json", 'r') as json_file:
        data = json.load(json_file)
        write_csv_output_file(data, "orders_2024")


if __name__ == '__main__':
    run()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
