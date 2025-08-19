from abc import ABC, abstractmethod

class Product(ABC):
    @abstractmethod
    def name(self) -> str: ...
    @abstractmethod
    def compute(self, price: float) -> float: ...
