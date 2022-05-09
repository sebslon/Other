import { Request, Response, NextFunction } from "express";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("hey");
    await next();
  } catch (error: unknown) {
    if (process.env.NODE_ENV === "development") {
      return res.status(500).send(error);
    } else {
      // + logging
      return res.status(500).send("Something went wrong...");
    }
  }
};
