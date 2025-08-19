import type { DomainEvent } from './Events.js';
export type Handler = (e: DomainEvent) => void;

export class EventBus {
  private handlers: Handler[] = [];
  publish(e: DomainEvent) { this.handlers.forEach(h => h(e)); }
  subscribe(h: Handler) { this.handlers.push(h); return () => this.handlers = this.handlers.filter(x => x !== h); }
}
