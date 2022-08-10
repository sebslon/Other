import { App } from './app';

import { ImagesRouter } from './src/api/images/images.router';

export const server = new App([new ImagesRouter()]);

server.listen();
