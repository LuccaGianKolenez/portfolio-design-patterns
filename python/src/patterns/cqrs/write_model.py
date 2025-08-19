from .event_bus import EventBus
from .events import UserCreated, UserNameUpdated

class WriteModel:
    def __init__(self, bus: EventBus) -> None:
        self.bus = bus
    def create_user(self, id: str, name: str, email: str) -> None:
        self.bus.publish(UserCreated(id, name, email))
    def update_user_name(self, id: str, name: str) -> None:
        self.bus.publish(UserNameUpdated(id, name))
