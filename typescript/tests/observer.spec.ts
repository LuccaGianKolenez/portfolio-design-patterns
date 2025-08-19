import { describe, it, expect } from 'vitest';
import { Order } from '../src/patterns/observer/OrderSubject';
import { EmailObserver, LogObserver } from '../src/patterns/observer/Observers';

describe('Observer (TS)', () => {
  it('notifies observers on status change', () => {
    const order = new Order();
    const mail = new EmailObserver();
    const log = new LogObserver();
    order.attach(mail);
    order.attach(log);

    order.status = 'paid';
    order.status = 'shipped';

    expect(mail.messages).toEqual(['paid','shipped']);
    expect(log.events).toEqual(['paid','shipped']);
  });
});
