import type { AccountEvent } from './Events.js';
import { EventStore } from './EventStore.js';

export class Account {
  private balance = 0;
  constructor(private id: string, private store: EventStore) {}

  private apply(e: AccountEvent) {
    switch (e.type) {
      case 'Deposited': this.balance += e.amount; break;
      case 'Withdrawn': this.balance -= e.amount; break;
    }
  }

  load() { this.store.load(this.id).forEach(e => this.apply(e)); return this; }
  getBalance() { return this.balance; }

  deposit(amount: number) {
    if (amount <= 0) throw new Error('amount > 0');
    const e: AccountEvent = { type: 'Deposited', amount };
    this.store.append(this.id, e);
    this.apply(e);
  }
  withdraw(amount: number) {
    if (amount <= 0) throw new Error('amount > 0');
    if (this.balance < amount) throw new Error('insufficient');
    const e: AccountEvent = { type: 'Withdrawn', amount };
    this.store.append(this.id, e);
    this.apply(e);
  }
}
