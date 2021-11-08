import { Request, Response } from "express";
import { languagesHandler } from "./LanguagesHandler";

export class TranslationService {
  async translateDataWithGivenLanguage(req: Request, res: Response){
    const { lang } = req.body;

    const isSupported = languagesHandler.isLanguageSupported(lang);
    console.log(isSupported);
    return res.status(200).send(isSupported);
  }
}