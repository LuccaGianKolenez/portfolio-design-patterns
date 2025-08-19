import { describe, it, expect } from 'vitest';
import { EventStore } from '../src/patterns/event-sourcing/EventStore';
import { Account } from '../src/patterns/event-sourcing/Account';

describe('Event Sourcing (TS)', () => {
  it('rebuilds state from events', () => {
    const store = new EventStore();
    const a1 = new Account('acc1', store).load();
    a1.deposit(100);
    a1.withdraw(40);
    expect(a1.getBalance()).toBe(60);

    // Rehydrate another instance from the same stream
    const a2 = new Account('acc1', store).load();
    expect(a2.getBalance()).toBe(60);
  });
});
