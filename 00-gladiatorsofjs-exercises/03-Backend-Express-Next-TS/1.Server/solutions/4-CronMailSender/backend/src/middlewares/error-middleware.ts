import { Request, Response, NextFunction } from "express";

import { AppError } from "../helpers/error";

export const errorMiddleware = async (
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error.message);

  if (error instanceof AppError) {
    return res.status(error.status).send({ message: error.message });
  } else {
    res.status(500).json({ error: "Something failed" });
  }
};
