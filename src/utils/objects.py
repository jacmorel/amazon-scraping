def recursive_vars(obj, ignore_none=False):
    try:
        if isinstance(obj, list):
            return [recursive_vars(e, ignore_none) for e in obj]
        # TODO does not handle dict yet
        else:
            items = {k: recursive_vars(v, ignore_none) for k, v in vars(obj).items()}
            return {k: v for k, v in items.items() if v is not None} if ignore_none else items
    except TypeError:
        return obj

