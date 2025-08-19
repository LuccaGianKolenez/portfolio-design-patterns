import { describe, it, expect } from 'vitest';
import { ProductFactory } from '../src/patterns/factory/ProductFactory';
describe('Factory (TS)', () => {
    it('creates basic product', () => {
        const p = ProductFactory.create('basic');
        expect(p.name()).toBe('BasicProduct');
        expect(p.compute(100)).toBe(100);
    });
    it('creates premium product', () => {
        const p = ProductFactory.create('premium');
        expect(p.name()).toBe('PremiumProduct');
        expect(p.compute(100)).toBe(125);
    });
    it('throws on unknown', () => {
        // @ts-expect-error testing runtime error
        expect(() => ProductFactory.create('gold')).toThrow();
    });
});
