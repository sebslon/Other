import { Router as ExpressRouter } from 'express';

export interface IRouter {
  path: string;
  router: ExpressRouter;
}
