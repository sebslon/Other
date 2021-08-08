import { Cart, Repository } from "../../types";

import { carts } from "./data";

class InMemoryRepository implements Repository {
  private carts: Cart[] = carts;

  getCart(id: string) {
    return this.carts.find((cart) => cart.id === id);
  }
}

export const inMemoryRepository = new InMemoryRepository();
