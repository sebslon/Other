import { Router as ExpressRouter } from "express";

export interface IRouter {
  path: string;
  router: ExpressRouter;
}

export interface Buyer {
  name: string;
  amountOfBoughtProducts: number;
}
