import { Router } from "express";

export interface Controller {
  path: string;
  router: Router;
}

export interface UserWithAmountOfBoughtProducts {
  name: string;
  amount: number;
}
