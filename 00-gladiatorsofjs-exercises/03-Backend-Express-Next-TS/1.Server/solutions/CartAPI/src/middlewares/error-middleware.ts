import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === "development") {
    return res.status(500).send(error.message);
  } else {
    // + logging
    return res.status(500).send("Something went wrong...");
  }
};
