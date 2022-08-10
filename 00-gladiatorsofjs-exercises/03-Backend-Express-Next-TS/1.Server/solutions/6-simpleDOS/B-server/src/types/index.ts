import { Router as ExpressRouter, Request, Response } from 'express';
import { Query, Send } from 'express-serve-static-core';

export interface IRouter {
  path: string;
  router: ExpressRouter;
}

/* Express Request & Response typed */
export interface TRequestBody<T> extends Request {
  body: T;
}

export interface TRequestQueryP<T extends Query> extends Request {
  query: T;
}

export interface TRequest<T extends Query, U> extends Request {
  body: U;
  query: T;
}

export interface TResponse<ResBody> extends Response {
  json: Send<ResBody, this>;
}

// Repositories for example

export interface IRepository<T> {}

export interface SampleRepository extends IRepository<any> {
  getUser(name: string): string | undefined;
}
