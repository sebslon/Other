import { Query, Send } from 'express-serve-static-core';
import { Request, Response } from 'express';

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
