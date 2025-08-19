from typing import Callable
from .events import DomainEvent

Handler = Callable[[DomainEvent], None]

class EventBus:
    def __init__(self) -> None:
        self._handlers: list[Handler] = []
    def publish(self, e: DomainEvent) -> None:
        for h in list(self._handlers):
            h(e)
    def subscribe(self, h: Handler):
        self._handlers.append(h)
        def unsubscribe():
            self._handlers.remove(h)
        return unsubscribe
