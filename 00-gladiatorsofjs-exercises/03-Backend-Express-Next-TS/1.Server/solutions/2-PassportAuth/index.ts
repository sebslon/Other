require("dotenv").config();

import { App } from "./app";

import { AuthController } from "./src/api/auth/AuthController";
import { UsersController } from "./src/api/accounts/UsersController";
import { TestController } from "./src/api/test/TestController";

const server = new App([
  new TestController(),
  new UsersController(),
  new AuthController(),
]);

server.listen();
