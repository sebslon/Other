import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === "development") {
    return res.sendStatus(500).json(error.message);
  } else {
    return res.sendStatus(500).json("Something went wrong");
  }
}
