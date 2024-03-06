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
        mock_check_output.return_value = json.dumps({'username': USER, 'password': PWD}).encode()

        actual_result = get_item_fields(VAULT, ITEM, ["username", "password"])

        self.assertEqual(actual_result, (USER, PWD))

        mock_check_output.assert_called_once_with(
            ["op", "item", "get", ITEM, "--fields", "label=username,label=password", "--vault", VAULT,
             "--format", "json"])


if __name__ == '__main__':
    unittest.main()
