import { App } from './app';

import { CatsRouter } from './src/api/cats/cats.router';

export const server = new App([new CatsRouter()]);

server.listen();
