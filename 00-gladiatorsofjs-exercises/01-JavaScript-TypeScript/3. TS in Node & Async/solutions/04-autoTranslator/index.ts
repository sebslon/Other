require("dotenv").config();

import { App } from "./app";

import { TranslationController } from "./src/api/translation/TranslationController";

export const server = new App([new TranslationController()]).listen();
