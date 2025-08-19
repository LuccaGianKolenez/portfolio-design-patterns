from .event_store import EventStore
from .events import AccountEvent, Deposited, Withdrawn

class Account:
    def __init__(self, id: str, store: EventStore) -> None:
        self.id = id
        self.store = store
        self.balance = 0.0
    def apply(self, e: AccountEvent) -> None:
        if isinstance(e, Deposited):
            self.balance += e.amount
        elif isinstance(e, Withdrawn):
            self.balance -= e.amount
    def load(self) -> "Account":
        for e in self.store.load(self.id):
            self.apply(e)
        return self
    def deposit(self, amount: float) -> None:
        if amount <= 0: raise ValueError("amount > 0")
        e = Deposited(amount)
        self.store.append(self.id, e)
        self.apply(e)
    def withdraw(self, amount: float) -> None:
        if amount <= 0: raise ValueError("amount > 0")
        if self.balance < amount: raise ValueError("insufficient")
        e = Withdrawn(amount)
        self.store.append(self.id, e)
        self.apply(e)
