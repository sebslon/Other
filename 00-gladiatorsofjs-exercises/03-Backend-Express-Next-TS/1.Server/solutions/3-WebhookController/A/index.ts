import { App } from "./app";

import { UsersRouter } from "./src/api/users/users.router";

const server = new App([new UsersRouter()]);

server.listen();
