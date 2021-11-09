import { Router } from "express";

export interface Controller {
  path: string;
  router: Router;
}

export interface IGoogleLanguagesResponse {
  data: {
    languages: { language: string }[];
  };
}

export interface IGoogleTranslationsResponse {
  data: {
    translations: { translatedText: string; detectedSourceLanguage: string }[];
  };
}

export interface TranslationData {
  [key: string]: TranslationObject;
}
export interface TranslationObject {
  [key: string]: string;
}
