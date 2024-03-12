import logging

from utils.objects import get_caller_class_name


def get_logger(name=None, level=None):
    if name is None:
        name = get_caller_class_name(1)
    logger = logging.getLogger(name)
    if level is not None:
        logger.setLevel(level)

    return logger
