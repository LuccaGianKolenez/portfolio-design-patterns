from dataclasses import dataclass
@dataclass(frozen=True)
class UserCreated:
    id: str
    name: str
    email: str

@dataclass(frozen=True)
class UserNameUpdated:
    id: str
    name: str

DomainEvent = UserCreated | UserNameUpdated
