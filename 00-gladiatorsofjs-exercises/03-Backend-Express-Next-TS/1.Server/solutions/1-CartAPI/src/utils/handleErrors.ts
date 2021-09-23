import { Request, Response, NextFunction } from "express";

// Routes wrapper
// Passing catched errors from routes to error handling middleware

export const handleErrors = (handler: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
};
