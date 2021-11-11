require("dotenv").config();

import { App } from "./app";

import { SendMailController } from "./src/api/send-mail/SendMailController";

export const server = new App([new SendMailController()]).listen();
