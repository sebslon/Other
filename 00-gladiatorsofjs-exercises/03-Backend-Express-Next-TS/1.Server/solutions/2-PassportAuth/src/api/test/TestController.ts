import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../helpers/handleErrors";

import { TestService } from "./TestService";

export class TestController implements Controller {
  public path = "/test";
  public router: Router;

  private testService = new TestService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", handleErrors(this.testService.sayHello));
    this.router.post("/create-user", handleErrors(this.testService.createUser));
  }
}
