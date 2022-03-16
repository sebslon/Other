import { Router } from "express";

import { Controller } from "../../types";
import { UsersService } from "./users.service";

// switch controllers to routers
export class UsersController implements Controller {
  public path = "/users";
  public router: Router;

  private userService = new UsersService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/addUser/:name", this.userService.addUser);
    this.router.put("/userLoggedIn/:name", this.userService.userLoggedIn);
    this.router.put("/userLoggedOut/:name", this.userService.userLoggedOut);
    this.router.put(
      "/userBoughtProduct/:name",
      this.userService.userBoughtSomething
    );
  }
}
