export type UserCreated = { type: 'UserCreated'; id: string; name: string; email: string };
export type UserNameUpdated = { type: 'UserNameUpdated'; id: string; name: string };
export type DomainEvent = UserCreated | UserNameUpdated;
