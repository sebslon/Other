import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../helpers/handleErrors";

import { UsersService } from "./UsersService";

export class UsersController implements Controller {
  public path = "/users";
  public router: Router;

  private userService = new UsersService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/create", handleErrors(this.userService.createUser));
  }
}
