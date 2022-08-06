import { App } from './app';

import { EmailsRouter } from './src/api/emails/emails.router';

export const server = new App([new EmailsRouter()]);

server.listen();
