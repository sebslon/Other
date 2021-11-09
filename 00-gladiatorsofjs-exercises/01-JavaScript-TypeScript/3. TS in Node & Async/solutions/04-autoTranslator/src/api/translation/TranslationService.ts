import { Request, Response } from "express";

import { languagesHandler } from "./LanguagesHandler";
import { translationHandler } from "./TranslationHandler";

export class TranslationService {
  async translateDataWithGivenLanguage(req: Request, res: Response) {
    const { lang } = req.body;

    const isSupported = await languagesHandler.isLanguageSupported(lang);

    if (!isSupported) {
      return res.status(400).send("Given language is not supported.");
    }

    const translation = await translationHandler.translateData(lang);

    return res.status(200).json(translation);
  }
}
