import type { Subject } from './Subject.js';
import type { Observer } from './Observer.js';

export type OrderStatus = 'created' | 'paid' | 'shipped';

export class Order implements Subject<OrderStatus> {
  private observers = new Set<Observer<OrderStatus>>();
  private _status: OrderStatus = 'created';

  attach(o: Observer<OrderStatus>): void { this.observers.add(o); }
  detach(o: Observer<OrderStatus>): void { this.observers.delete(o); }
  notify(value: OrderStatus): void { this.observers.forEach(o => o.update(value)); }

  get status(): OrderStatus { return this._status; }
  set status(s: OrderStatus) { this._status = s; this.notify(this._status); }
}
