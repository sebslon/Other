import { App } from "./app";

import { UsersController } from "./src/api/users/users.controller";

const server = new App([new UsersController()]);

server.listen();
