import { Request, Response, NextFunction } from "express";

export function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).send(error.message);
  } else {
    // logging errors
    return res.send(500).send("Something went wrong");
  }
}