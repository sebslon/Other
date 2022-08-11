import { App } from './app';

import { AttackingRouter } from './src/api/sample/attack.router';

export const server = new App([new AttackingRouter()]);

server.listen();
