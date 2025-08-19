import type { Observer } from './Observer.js';
import type { OrderStatus } from './OrderSubject.js';

export class EmailObserver implements Observer<OrderStatus> {
  public messages: OrderStatus[] = [];
  update(value: OrderStatus): void { this.messages.push(value); }
}

export class LogObserver implements Observer<OrderStatus> {
  public events: OrderStatus[] = [];
  update(value: OrderStatus): void { this.events.push(value); }
}
