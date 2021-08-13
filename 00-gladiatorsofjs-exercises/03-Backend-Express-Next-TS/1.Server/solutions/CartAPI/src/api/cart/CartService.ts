import { Request, Response } from "express";

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

  async removeProductFromCart(req: Request, res: Response) {
    const { id: cartId } = req.params;
    const { productId } = req.body;

    const cart = await this.repository.getById(cartId);
    if (!cart) return res.status(404).send("Cart not found");
    
    const productIndex = cart?.products.findIndex(product => product._id === productId);

    if(productIndex === -1) {
      throw new Error("Product with that id is not in the cart");
    }
    
    cart?.products.splice(productIndex, 1);
    await this.repository.update(cart);
    return res.status(200).send("Product removed from the cart");
  }
}
