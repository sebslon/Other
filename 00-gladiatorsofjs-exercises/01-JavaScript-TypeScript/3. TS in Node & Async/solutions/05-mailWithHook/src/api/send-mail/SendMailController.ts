import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../utils/handleErrors";

import { SendMailService } from "./SendMailService";

export class SendMailController implements Controller {
  public path = "/";
  public router: Router;
  private emailService = new SendMailService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/send-first",
      handleErrors(this.emailService.sendFirstEmail)
    );
    this.router.get(
      "/send-second",
      handleErrors(this.emailService.sendSecondEmail)
    );
  }
}
