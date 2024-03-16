import json

from scraping.utils import write_csv_output_file


def run():
    json_file = "output/orders_2023-2024-2024-03-12_05-14.json"
    csv_file = json_file.replace(".json", "")
    with open(json_file, 'r') as json_file:
        data = json.load(json_file)
        write_csv_output_file(data, csv_file)


if __name__ == '__main__':
    run()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
