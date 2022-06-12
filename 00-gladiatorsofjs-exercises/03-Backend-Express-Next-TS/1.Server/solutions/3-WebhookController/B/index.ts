import { App } from "./app";

import { WebhookRouter } from "./src/api/webhook.router";

export const server = new App([new WebhookRouter()]);

server.listen();
