import type { DomainEvent } from './Events.js';
import { EventBus } from './EventBus.js';

export class WriteModel {
  constructor(private bus: EventBus) {}
  createUser(id: string, name: string, email: string) {
    const evt: DomainEvent = { type: 'UserCreated', id, name, email };
    this.bus.publish(evt);
  }
  updateUserName(id: string, name: string) {
    const evt: DomainEvent = { type: 'UserNameUpdated', id, name };
    this.bus.publish(evt);
  }
}
