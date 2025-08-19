from .concrete_products import BasicProduct, PremiumProduct
from .product import Product

def create(kind: str) -> Product:
    if kind == "basic":
        return BasicProduct()
    if kind == "premium":
        return PremiumProduct()
    raise ValueError(f"Unknown product kind: {kind}")
