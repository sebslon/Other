import { Request, Response, NextFunction } from "express";

export const logger = (
  // error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${req.method}: ${req.url} - DATA: ${JSON.stringify(req.body)}`);
  next();
};
