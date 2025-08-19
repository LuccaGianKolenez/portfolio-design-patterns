import { ReadModel } from './ReadModel.js';
export class Queries {
  constructor(private read: ReadModel) {}
  getUser(id: string) { return this.read.getUser(id); }
  allUsers() { return this.read.all(); }
}
