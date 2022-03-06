import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../helpers/handleErrors";

import { AccountsService } from "./AccountsService";

export class AccountsController implements Controller {
  public path = "/accounts";
  public router: Router;

  private testService = new AccountsService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/create", handleErrors(this.testService.createUser));
  }
}
