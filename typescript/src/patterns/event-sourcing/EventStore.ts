import type { AccountEvent } from './Events.js';

export class EventStore {
  private store = new Map<string, AccountEvent[]>();
  append(streamId: string, event: AccountEvent) {
    const arr = this.store.get(streamId) ?? [];
    arr.push(event);
    this.store.set(streamId, arr);
  }
  load(streamId: string): AccountEvent[] {
    return [...(this.store.get(streamId) ?? [])];
  }
}
