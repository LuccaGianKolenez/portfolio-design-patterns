from patterns.factory.product_factory import create
import pytest

def test_basic():
    p = create("basic")
    assert p.name() == "BasicProduct"
    assert p.compute(100) == 100

def test_premium():
    p = create("premium")
    assert p.name() == "PremiumProduct"
    assert p.compute(100) == 125

def test_unknown():
    with pytest.raises(ValueError):
        create("gold")
