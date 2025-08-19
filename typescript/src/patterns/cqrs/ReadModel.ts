import type { DomainEvent } from './Events.js';

export interface User { id: string; name: string; email: string; }

export class ReadModel {
  private users = new Map<string, User>();

  project(e: DomainEvent) {
    switch (e.type) {
      case 'UserCreated': this.users.set(e.id, { id: e.id, name: e.name, email: e.email }); break;
      case 'UserNameUpdated': {
        const u = this.users.get(e.id);
        if (u) u.name = e.name;
        break;
      }
    }
  }
  getUser(id: string) { return this.users.get(id); }
  all() { return Array.from(this.users.values()); }
}
