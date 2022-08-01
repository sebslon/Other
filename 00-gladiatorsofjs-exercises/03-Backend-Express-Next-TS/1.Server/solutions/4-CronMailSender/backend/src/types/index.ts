import { Router as ExpressRouter } from 'express';

export interface IRouter {
  path: string;
  router: ExpressRouter;
}

export interface Email {
  id: number;
  receiver: string;
  subject: string;
  content: string;
  html: string;
  timesVisited: number;
  active: boolean;
}
