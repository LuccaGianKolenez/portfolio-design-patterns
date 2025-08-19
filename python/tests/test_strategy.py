from patterns.strategy.context import PriceCalculator
from patterns.strategy.concrete_strategies import PercentageDiscount, FixedDiscount

def test_percentage():
    calc = PriceCalculator(PercentageDiscount(10))
    assert calc.calc(200) == 180

def test_fixed():
    calc = PriceCalculator(FixedDiscount(30))
    assert calc.calc(100) == 70
