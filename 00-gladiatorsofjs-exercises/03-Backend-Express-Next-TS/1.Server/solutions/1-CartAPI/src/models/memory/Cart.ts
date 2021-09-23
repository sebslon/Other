import { Product } from "./Product";

export class Cart {
  _id: string;
  products: Product[];

  constructor(id: string, products?: Product[]) {
    this._id = id;
    this.products = products || [];
  }
};