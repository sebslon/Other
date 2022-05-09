import { NextFunction, Request, Response } from "express";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await next();
  } catch (error: unknown) {
    if (process.env.NODE_ENV === "development") {
      return res.status(500).send(error);
    } else {
      return res.status(500).send("Something went wrong...");
    }
  }
};
