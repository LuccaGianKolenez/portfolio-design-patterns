export type Deposited = { type: 'Deposited'; amount: number };
export type Withdrawn = { type: 'Withdrawn'; amount: number };
export type AccountEvent = Deposited | Withdrawn;
