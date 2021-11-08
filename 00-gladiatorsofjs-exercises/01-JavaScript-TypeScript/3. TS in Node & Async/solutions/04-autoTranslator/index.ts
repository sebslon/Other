require('dotenv').config();

import { App } from "./app";

import { TranslationController } from "./src/api/translation/TranslationController";

const server = new App([new TranslationController()]);

server.listen();
