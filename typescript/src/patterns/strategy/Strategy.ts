export interface PriceStrategy {
  apply(price: number): number;
}
