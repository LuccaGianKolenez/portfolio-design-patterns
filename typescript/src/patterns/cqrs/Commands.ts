import { WriteModel } from './WriteModel.js';
export class Commands {
  constructor(private write: WriteModel) {}
  createUser(id: string, name: string, email: string) { this.write.createUser(id, name, email); }
  updateUserName(id: string, name: string) { this.write.updateUserName(id, name); }
}
