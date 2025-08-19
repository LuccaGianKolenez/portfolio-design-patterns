import type { PriceStrategy } from './Strategy.js';

export class PercentageDiscount implements PriceStrategy {
  constructor(private percent: number) {
    if (percent < 0 || percent > 100) throw new Error('percent must be 0..100');
  }
  apply(price: number): number {
    return +(price * (1 - this.percent / 100)).toFixed(2);
  }
}

export class FixedDiscount implements PriceStrategy {
  constructor(private amount: number) {}
  apply(price: number): number {
    return Math.max(0, +(price - this.amount).toFixed(2));
  }
}
