import type { PriceStrategy } from './Strategy.js';

export class PriceCalculator {
  constructor(private strategy: PriceStrategy) {}
  setStrategy(s: PriceStrategy) { this.strategy = s; }
  calc(price: number) { return this.strategy.apply(price); }
}
