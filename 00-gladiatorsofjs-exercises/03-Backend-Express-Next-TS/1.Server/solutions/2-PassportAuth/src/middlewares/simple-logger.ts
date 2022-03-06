import { NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const method = req.method;
  const url = req.url;
  const log = `[${method}:${url}]`;

  next();
};
