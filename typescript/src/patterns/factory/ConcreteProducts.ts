import type { Product } from './Product.js';

export class BasicProduct implements Product {
  name() { return 'BasicProduct'; }
  compute(price: number) { return price; }
}

export class PremiumProduct implements Product {
  name() { return 'PremiumProduct'; }
  compute(price: number) { return price * 1.25; }
}
