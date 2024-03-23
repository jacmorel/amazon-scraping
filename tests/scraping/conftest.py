import pytest

from scraping.framework.utils import create_driver_with_default_options


@pytest.fixture
def driver():
    driver = create_driver_with_default_options()
    yield driver
    driver.quit()


@pytest.fixture
def headless_driver():
    driver = create_driver_with_default_options(True)
    yield driver
    driver.quit()
