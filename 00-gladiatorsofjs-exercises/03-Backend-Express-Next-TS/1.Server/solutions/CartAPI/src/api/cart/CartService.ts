import { NextFunction, Request, Response } from "express";

import { Cart } from "../../models/memory/Cart";
import { Product } from "../../models/memory/Product";
import { Repository } from "../../types";

export class CartService {
  constructor(private repository: Repository<Cart>) {}

  async getAllCarts(req: Request, res: Response) {
    const carts = await this.repository.getAll();

    return res.status(200).send(carts);
  }

  async getCart(req: Request, res: Response) {
    const { id } = req.params;
    const cart = await this.repository.getById(id);

    if (!cart) return res.status(404).send("Cart not found");

    return res.status(200).send(cart);
  }

  async addProductToCart(req: Request, res: Response) {
    const { id } = req.params;
    const { product } = req.body;

    const newProduct = new Product(
      product.name,
      product.price,
      product.quantity
    );

    if (!Product.isValid(newProduct)) {
      throw new Error("Invalid product data.");
    }

    const cart = await this.repository.getById(id);

    if (!cart) return res.status(404).send("Cart not found");

    cart.products.push(newProduct);
    await this.repository.update(cart);

    return res.status(201).send("Product successfully added to cart.");
  }
}
