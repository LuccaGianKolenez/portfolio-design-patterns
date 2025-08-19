from typing import Literal
from .subject import Subject

OrderStatus = Literal['created','paid','shipped']

class Order(Subject[OrderStatus]):
    def __init__(self) -> None:
        super().__init__()
        self._status: OrderStatus = 'created'
    @property
    def status(self) -> OrderStatus:
        return self._status
    @status.setter
    def status(self, s: OrderStatus) -> None:
        self._status = s
        self.notify(self._status)
