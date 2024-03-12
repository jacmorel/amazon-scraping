from utils import loggers


class TestClass:
    log = loggers.get_logger()

    def __init__(self):
        pass


def test_get_logger():
    assert TestClass().log.name == "TestClass"
