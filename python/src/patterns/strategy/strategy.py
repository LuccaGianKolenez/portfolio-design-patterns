from abc import ABC, abstractmethod

class PriceStrategy(ABC):
    @abstractmethod
    def apply(self, price: float) -> float: ...
