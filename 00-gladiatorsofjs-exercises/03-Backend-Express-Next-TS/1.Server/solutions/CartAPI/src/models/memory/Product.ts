import { v4 as uuid } from "uuid";

export class Product {
  _id: string;
  
  constructor(
    public name: string,
    public price: number,
    public quantity: number
  ) {
    this._id = uuid();
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static isValid(product: Product) {
    if (!product) {
      throw new Error("Invalid data");
    }

    return (
      product?.name &&
      product?.price &&
      product?.quantity &&
      typeof product.name === "string" &&
      typeof product.price === "number" &&
      typeof product.quantity === "number" 
    );
  }
}
