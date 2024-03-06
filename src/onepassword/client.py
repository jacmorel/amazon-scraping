import subprocess
import json
import logging as log

log.basicConfig(level=log.DEBUG)


def get_item_fields(vault, item_name, fields):
    formatted_fields = ",".join(["label=" + s for s in fields])
    secrets_json = subprocess.check_output(
        ["op", "item", "get", item_name,
         "--fields", formatted_fields,
         "--vault", vault,
         "--format", "json"])
    secrets = json.loads(secrets_json)
    return tuple(item['value'] for item in secrets)
