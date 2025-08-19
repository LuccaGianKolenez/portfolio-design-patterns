from dataclasses import dataclass
@dataclass(frozen=True)
class Deposited:
    amount: float
@dataclass(frozen=True)
class Withdrawn:
    amount: float

AccountEvent = Deposited | Withdrawn
