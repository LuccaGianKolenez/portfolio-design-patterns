from typing import Dict
from .events import DomainEvent, UserCreated, UserNameUpdated

class ReadModel:
    def __init__(self) -> None:
        self.users: Dict[str, dict] = {}
    def project(self, e: DomainEvent) -> None:
        if isinstance(e, UserCreated):
            self.users[e.id] = {"id": e.id, "name": e.name, "email": e.email}
        elif isinstance(e, UserNameUpdated):
            u = self.users.get(e.id)
            if u: u["name"] = e.name
    def get_user(self, id: str):
        return self.users.get(id)
    def all(self):
        return list(self.users.values())
