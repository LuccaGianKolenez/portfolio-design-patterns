import { describe, it, expect } from 'vitest';
import { PriceCalculator } from '../src/patterns/strategy/Context';
import { PercentageDiscount, FixedDiscount } from '../src/patterns/strategy/ConcreteStrategies';

describe('Strategy (TS)', () => {
  it('percentage discount', () => {
    const calc = new PriceCalculator(new PercentageDiscount(10));
    expect(calc.calc(200)).toBe(180);
  });
  it('fixed discount', () => {
    const calc = new PriceCalculator(new FixedDiscount(30));
    expect(calc.calc(100)).toBe(70);
  });
});
