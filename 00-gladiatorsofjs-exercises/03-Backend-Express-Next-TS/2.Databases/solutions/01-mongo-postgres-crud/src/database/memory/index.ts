// separate per use case - for example purposes only

import { CatsRepository } from '../../types';

export class InMemoryRepository implements CatsRepository {
  private users = ['Sebastian'];

  getUser(name: string) {
    return this.users.find((user) => user === name);
  }
}

export const inMemoryRepository = new InMemoryRepository();
