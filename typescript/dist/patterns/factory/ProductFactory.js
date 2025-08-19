import { BasicProduct, PremiumProduct } from './ConcreteProducts';
export class ProductFactory {
    static create(kind) {
        switch (kind) {
            case 'basic': return new BasicProduct();
            case 'premium': return new PremiumProduct();
            default: throw new Error(`Unknown product kind: ${kind}`);
        }
    }
}
