import addPathAliases from './path-aliases';

addPathAliases();

import { App } from './app';

export const server = new App([]);

server.listen();
