import { Router } from "express";

export interface Controller {
  path: string;
  router: Router;
}

interface IResponse {
  message: string;
}

export interface IEmailMessage {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export interface ITransporter {
  sendMessage(msg: IEmailMessage): void;
}