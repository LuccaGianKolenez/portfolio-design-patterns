export class BasicProduct {
    name() { return 'BasicProduct'; }
    compute(price) { return price; }
}
export class PremiumProduct {
    name() { return 'PremiumProduct'; }
    compute(price) { return price * 1.25; }
}
