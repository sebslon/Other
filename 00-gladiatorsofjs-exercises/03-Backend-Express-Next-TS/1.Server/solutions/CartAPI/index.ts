require('dotenv').config();

import { App } from "./app";
import { CartController } from "./src/api/cart/CartController";

const server = new App([
  new CartController()
]);

server.listen();