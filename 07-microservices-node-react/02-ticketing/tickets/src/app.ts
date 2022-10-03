import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@msvcs/common';

const app = express();

app.set('trust proxy', true); // Traffic is proxied by ingress-nginx

app.use(express.json());

app.use(
  cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test' })
);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
