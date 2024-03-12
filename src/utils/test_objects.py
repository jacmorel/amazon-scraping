import datetime

from utils.objects import recursive_vars, to_json, get_caller, get_caller_class_name

TIME = datetime.datetime(2024, 5, 4, 3, 2, 1)


# noinspection PyMethodMayBeStatic
class TestClass:
    name = get_caller_class_name()

    def __init__(self):
        self.time = TIME

    def caller_of_get_caller(self):
        return get_caller()

    def caller_of_get_caller_class_name(self):
        return get_caller_class_name()


def test_recursive_vars():
    assert recursive_vars(TestClass()) == {'time': TIME}


def test_to_json():
    assert to_json(TestClass()) == '{"time": "2024-05-04 03:02:01"}'


def test_get_caller():
    assert get_caller() == "test_get_caller"
    assert TestClass().caller_of_get_caller() == "TestClass.caller_of_get_caller"


def test_get_caller_class_name():
    assert get_caller_class_name() is None
    assert TestClass().caller_of_get_caller_class_name() == "TestClass"
    assert TestClass().name == "TestClass"
