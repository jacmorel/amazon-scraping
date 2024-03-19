import unittest
from unittest.mock import patch
import json
from onepassword.client import get_item_fields

PWD = 'test_pass'
USER = 'test_user'
ITEM = 'test_item'
VAULT = 'test_vault'


class TestGetItem(unittest.TestCase):

    @patch('subprocess.check_output')
    def test_get_item(self, mock_check_output):
        onepassword_response = f"""[
  {{
    "id": "username",
    "type": "STRING",
    "purpose": "USERNAME",
    "label": "username",
    "value": "{USER}",
    "reference": "op://ServiceAccount/Amazon/username"
  }},
  {{
    "id": "password",
    "type": "CONCEALED",
    "purpose": "PASSWORD",
    "label": "password",
    "value": "{PWD}",
    "reference": "op://ServiceAccount/Amazon/password",
    "password_details": {{
      "strength": "WEAK",
      "history": ["1", "2", "3"]
    }}
  }}
]"""

        mock_check_output.return_value = onepassword_response.encode()

        actual_result = get_item_fields(VAULT, ITEM, ["username", "password"])

        self.assertEqual(actual_result, (USER, PWD))

        mock_check_output.assert_called_once_with(
            ["op", "item", "get", ITEM, "--fields", "label=username,label=password", "--vault", VAULT,
             "--format", "json"])


if __name__ == '__main__':
    unittest.main()
