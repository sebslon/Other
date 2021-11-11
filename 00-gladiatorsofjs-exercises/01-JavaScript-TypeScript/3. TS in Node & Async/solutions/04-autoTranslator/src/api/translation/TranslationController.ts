import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../utils/handleErrors";

import { TranslationService } from "./TranslationService";

export class TranslationController implements Controller {
  public path = "/translate";
  public router: Router;
  private translationService = new TranslationService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/",
      handleErrors(this.translationService.translateDataWithGivenLanguage)
    );
  }
}
