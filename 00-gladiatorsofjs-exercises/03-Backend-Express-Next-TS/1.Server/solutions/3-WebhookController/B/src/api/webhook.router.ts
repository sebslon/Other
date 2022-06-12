import { Router } from "express";

import { IRouter } from "../types";

import { WebhookController } from "./webhook.controller";

// switch controllers to routers
export class WebhookRouter implements IRouter {
  public path = "/webhook";
  public router: Router;

  private webhookController = new WebhookController();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/send-data", this.webhookController.logAction);
  }
}
