// separate per use case - for example purposes only

import { SampleRepository } from "../../types";

export class InMemoryRepository implements SampleRepository {
  private users = ["Sebastian"];

  getUser(name: string) {
    return this.users.find((user) => user === name);
  }
}

export const inMemoryRepository = new InMemoryRepository();
