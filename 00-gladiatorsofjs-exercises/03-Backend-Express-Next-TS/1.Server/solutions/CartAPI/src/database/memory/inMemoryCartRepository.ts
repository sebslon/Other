import { carts } from "./data";

import { Cart } from "../../models/memory/Cart";
import { Repository } from "../../types";

class InMemoryCartRepository implements Repository<Cart> {
  private carts: Cart[] = carts;

  getAll() {
    return this.carts;
  }

  getById(id: string) {
    return this.carts.find((cart) => cart._id === id);
  }

  update(cart: Cart) {
    let oldCart = this.carts.findIndex((old) => old._id === cart._id);

    return this.carts[oldCart] = cart;
  }

  delete(id: string) {
    const index = this.carts.findIndex((cart) => cart._id === id);

    return this.carts.splice(index, 1);
  }

  create(cart: Cart) {
    return this.carts.push(cart);
  }
}

export const inMemoryCartRepository = new InMemoryCartRepository();
