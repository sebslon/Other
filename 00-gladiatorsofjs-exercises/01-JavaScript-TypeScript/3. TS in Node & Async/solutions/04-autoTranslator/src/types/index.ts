import { Router } from "express";

export interface Controller {
  path: string;
  router: Router;
}

export interface IGoogleLanguagesResponse {
  data: {
    languages: { language: string }[];
  }
}