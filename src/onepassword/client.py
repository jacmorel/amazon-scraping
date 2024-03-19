import subprocess
import json


def get_item_fields(vault, item_name, fields):
    """
    Retrieve the fields of an item from a vault
    ASSUMPTION: 1password returns the info in the order it was requested.
    If this is ever broken, the value will be in different order

    :param vault:
    :param item_name:
    :param fields:
    :return:
    """
    formatted_fields = ",".join(["label=" + s for s in fields])
    secrets_json = subprocess.check_output(
        ["op", "item", "get", item_name,
         "--fields", formatted_fields,
         "--vault", vault,
         "--format", "json"])
    secrets = json.loads(secrets_json)
    return tuple(item["value"] for item in secrets)
