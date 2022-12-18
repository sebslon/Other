import addPathAliases from './path-aliases';

addPathAliases();

import { App } from './app';

import { SampleRouter } from './src/api/sample/sample.router';

export const server = new App([new SampleRouter()]);

server.listen();
