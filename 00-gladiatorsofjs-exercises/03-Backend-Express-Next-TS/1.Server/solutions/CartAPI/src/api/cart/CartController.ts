import { Router } from "express";

import { Controller } from "../../types";

import { CartService } from "./CartService";
import { inMemoryRepository } from "../../database/memory/inMemoryRepository";

export class CartController implements Controller {
  public path = "/cart";
  public router: Router;
  private cartService = new CartService(inMemoryRepository);

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/:id`, this.cartService.getCart.bind(this.cartService));
  }
}
