import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../utils/handleErrors";

import { CartService } from "./CartService";
import { inMemoryCartRepository } from "../../database/memory/inMemoryCartRepository";

export class CartController implements Controller {
  public path = "/carts";
  public router: Router;
  private cartService = new CartService(inMemoryCartRepository);

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/",
      handleErrors(this.cartService.getAllCarts.bind(this.cartService))
    );
    this.router.get(
      "/:id",
      handleErrors(this.cartService.getCart.bind(this.cartService))
    );
    this.router.put(
      "/:id",
      handleErrors(this.cartService.addProductToCart.bind(this.cartService))
    );
    this.router.delete(
      "/:id",
      handleErrors(this.cartService.removeProductFromCart.bind(this.cartService))
    );
  }
}
