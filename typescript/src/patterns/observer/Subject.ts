import type { Observer } from './Observer.js';
export interface Subject<T> {
  attach(o: Observer<T>): void;
  detach(o: Observer<T>): void;
  notify(value: T): void;
}
