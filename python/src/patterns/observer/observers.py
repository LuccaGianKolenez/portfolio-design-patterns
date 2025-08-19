from .order_subject import OrderStatus

class EmailObserver:
    def __init__(self) -> None:
        self.messages: list[OrderStatus] = []
    def update(self, value: OrderStatus) -> None:
        self.messages.append(value)

class LogObserver:
    def __init__(self) -> None:
        self.events: list[OrderStatus] = []
    def update(self, value: OrderStatus) -> None:
        self.events.append(value)
