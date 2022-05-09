import { Router as ExpressRouter } from "express";

export type WebhookAction =
  | "userLoggedIn"
  | "userLoggedOut"
  | "userBoughtProduct"
  | "addUser";

export interface IDataAboutBought {
  username: string;
  amountOfProduct: number;
}
export interface IRouter {
  path: string;
  router: ExpressRouter;
}

export interface ILogData<T> {
  action: WebhookAction;
  data: T;
}

export interface IAxiosWrapper {
  post<T, U>(url: string, data: T): Promise<U>;
  put<T, U>(url: string, data: T): Promise<U>;
}
