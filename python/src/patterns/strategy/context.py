from .strategy import PriceStrategy

class PriceCalculator:
    def __init__(self, strategy: PriceStrategy):
        self.strategy = strategy
    def set_strategy(self, s: PriceStrategy):
        self.strategy = s
    def calc(self, price: float) -> float:
        return self.strategy.apply(price)
