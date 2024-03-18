import inspect
import time

from utils.objects import get_caller


class Timing:
    def __init__(self, name=None, log_start=False):
        self.name = name if name is not None else get_caller(1)
        self.log_start = log_start
        self.start_time = None
        self.end_time = None

    def start(self):
        self.start_time = time.time()

    def stop(self):
        self.end_time = time.time()

    def elapsed_time(self):
        return self.end_time - self.start_time

    def __enter__(self):
        if self.log_start:
            print(f"###TIME### START {self.name} ")
        self.start()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stop()
        print(self.get_results())

    def get_results(self):
        return f"###TIME### {"END " if self.log_start else ""}{self.name}: {self.elapsed_time()} seconds"
