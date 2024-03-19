import re
from time import sleep

from utils.perf import Timing


class TestClass:
    def run(self):
        with Timing() as t:
            sleep(0.1)
        return t


def test_timing_function_implicit_name():
    with Timing() as t:
        sleep(0.1)
    name, time = assert_format_and_return_args(t)
    assert 0.1 < time < 0.2
    assert name == "test_timing_function_implicit_name"


def test_timing_function_explicit_name():
    with Timing("Name") as t:
        sleep(0.1)
    name, time = assert_format_and_return_args(t)
    assert 0.1 < time < 0.2
    assert name == "Name"


def test_timing_class_method():
    t = TestClass().run()
    name, time = assert_format_and_return_args(t)
    assert 0.1 < time < 0.2
    assert name == "TestClass.run"


def assert_format_and_return_args(t):
    results = t.get_results()
    match = re.search(r"###TIME### ([a-zA-Z._]+): (\d+\.\d+) seconds", results)
    if match:
        name = match.group(1)
        time = float(match.group(2))
    else:
        raise AssertionError("incorrect output " + results)
    return name, time
