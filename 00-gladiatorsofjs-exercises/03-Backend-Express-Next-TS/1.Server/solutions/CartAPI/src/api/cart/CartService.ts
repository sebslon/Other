import { Request, Response } from "express";

import { Repository } from "../../types";

export class CartService {
  constructor(private repository: Repository) {}

  getCart(req: Request, res: Response) {
    const { id } = req.params;

    return res.status(200).send(this.repository.getCart(id));
  }
}
