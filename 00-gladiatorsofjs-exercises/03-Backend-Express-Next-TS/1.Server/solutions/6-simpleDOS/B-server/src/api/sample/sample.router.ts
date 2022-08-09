import { Router } from "express";

import { IRouter } from "../../types";

import { SampleController } from "./sample.controller";

export class SampleRouter implements IRouter {
  public path = "/example";
  public router: Router;

  private sampleController = new SampleController(); // Or just use static methods

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/hello",
      this.sampleController.sayHello.bind(this.sampleController)
    );
  }
}
