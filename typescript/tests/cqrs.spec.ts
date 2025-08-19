import { describe, it, expect } from 'vitest';
import { EventBus } from '../src/patterns/cqrs/EventBus';
import { ReadModel } from '../src/patterns/cqrs/ReadModel';
import { WriteModel } from '../src/patterns/cqrs/WriteModel';
import { Commands } from '../src/patterns/cqrs/Commands';
import type { DomainEvent } from '../src/patterns/cqrs/Events';

describe('CQRS (TS)', () => {
  it('projects events into read model', () => {
    const bus = new EventBus();
    const read = new ReadModel();
    bus.subscribe((e: DomainEvent) => read.project(e));

    const write = new WriteModel(bus);
    const commands = new Commands(write);

    commands.createUser('u1', 'Lucca', 'lucca@example.com');
    commands.updateUserName('u1', 'Lucca Kolenez');

    const user = read.getUser('u1');
    expect(user?.name).toBe('Lucca Kolenez');
    expect(read.all().length).toBe(1);
  });
});
