from .strategy import PriceStrategy

class PercentageDiscount(PriceStrategy):
    def __init__(self, percent: float):
        if percent < 0 or percent > 100:
            raise ValueError("percent must be 0..100")
        self.percent = percent
    def apply(self, price: float) -> float:
        return round(price * (1 - self.percent / 100), 2)

class FixedDiscount(PriceStrategy):
    def __init__(self, amount: float):
        self.amount = amount
    def apply(self, price: float) -> float:
        return max(0.0, round(price - self.amount, 2))
