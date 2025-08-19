from .product import Product

class BasicProduct(Product):
    def name(self) -> str:
        return "BasicProduct"
    def compute(self, price: float) -> float:
        return float(price)

class PremiumProduct(Product):
    def name(self) -> str:
        return "PremiumProduct"
    def compute(self, price: float) -> float:
        return float(price) * 1.25
