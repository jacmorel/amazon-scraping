import inspect
import json
from datetime import datetime
from enum import Enum
from json import JSONEncoder


def recursive_vars(obj, ignore_none=False):
    try:
        if isinstance(obj, list):
            return [recursive_vars(e, ignore_none) for e in obj]
        elif isinstance(obj, dict):
            return {k: recursive_vars(v, ignore_none) for k, v in obj.items()}
        elif isinstance(obj, Enum):
            return obj
        else:
            items = {k: recursive_vars(v, ignore_none) for k, v in vars(obj).items()}
            return {k: v for k, v in items.items() if v is not None} if ignore_none else items
    except TypeError:
        return obj


def to_dict(obj):
    if isinstance(obj, Enum):
        return obj.name
    elif hasattr(obj, '__dict__'):
        return obj.__dict__
    else:
        return str(obj)


class EnumEncoder(JSONEncoder):
    def default(self, obj):
        if hasattr(obj, '__dict__'):
            return obj.__dict__
        elif isinstance(obj, Enum):
            return obj.name
        elif isinstance(obj, datetime):
            return str(obj)
        else:
            return JSONEncoder.default(self, obj)


def to_json(obj):
    json_str = json.dumps(obj, default=to_dict)
    return json.loads(json_str)


def get_caller(depth=0):
    class_name = get_caller_class_name(depth + 1)
    method_name = get_caller_method_name(depth + 1)
    print(class_name, method_name)
    return method_name if class_name is None else f"{class_name}.{method_name}"


def get_caller_method_name(depth=0):
    return inspect.stack()[depth + 1][3]


def get_caller_class_name(depth=0):
    frame = inspect.currentframe()
    try:
        frame = inspect.getouterframes(frame)[depth + 1]
        args, _, _, value_dict = inspect.getargvalues(frame[0])

        if len(args) and args[0] == 'self':  # class method
            instance = value_dict.get('self', None)
            if instance:
                return instance.__class__.__name__
        if len(args) == 0:  # class fields initializer
            return value_dict.get('__qualname__', None)
        return None
    finally:
        del frame
