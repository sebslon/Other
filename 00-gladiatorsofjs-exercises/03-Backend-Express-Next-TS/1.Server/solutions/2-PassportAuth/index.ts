require("dotenv").config();

import { App } from "./app";

import { TestController } from "./src/api/test/TestController";

const server = new App([new TestController()]);

server.listen();
