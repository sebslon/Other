import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../utils/handleErrors";

import { SendMailService } from "./SendMailService";
import { nodemailerTransporter } from "./transporters/NodemailerTransporter";

export class SendMailController implements Controller {
  public path = "/email";
  public router: Router;
  private emailService = new SendMailService(nodemailerTransporter);

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/first",
      handleErrors(this.emailService.sendFirstEmail.bind(this.emailService))
    );
    this.router.get(
      "/second",
      handleErrors(this.emailService.sendSecondEmail.bind(this.emailService))
    );
  }
}
