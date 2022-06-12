import { Router } from "express";

import { IRouter } from "../../types";

import { UsersController } from "./users.controller";

export class UsersRouter implements IRouter {
  public path = "/users";
  public router: Router;

  private usersController = new UsersController();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/add/:name",
      this.usersController.addUser.bind(this.usersController)
    );
    this.router.post("/logged-in/:name", this.usersController.userLoggedIn);
    this.router.post("/logged-out/:name", this.usersController.userLoggedOut);
    this.router.post(
      "/bought-product/:name",
      this.usersController.userBoughtSomething
    );
  }
}
