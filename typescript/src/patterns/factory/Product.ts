export interface Product {
  name(): string;
  compute(price: number): number;
}
