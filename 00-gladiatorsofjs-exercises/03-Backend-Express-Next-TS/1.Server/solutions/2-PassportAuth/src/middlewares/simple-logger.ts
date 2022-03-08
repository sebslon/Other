import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  const method = req.method;
  const url = req.url;
  const log = `[${method}:${url}]`;

  console.log(log);

  return next();
}
