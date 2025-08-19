import { BasicProduct, PremiumProduct } from './ConcreteProducts.js';
import type { Product } from './Product.js';

export type ProductType = 'basic' | 'premium';

export class ProductFactory {
  static create(kind: ProductType): Product {
    switch (kind) {
      case 'basic': return new BasicProduct();
      case 'premium': return new PremiumProduct();
      default: throw new Error(`Unknown product kind: ${kind as string}`);
    }
  }
}
