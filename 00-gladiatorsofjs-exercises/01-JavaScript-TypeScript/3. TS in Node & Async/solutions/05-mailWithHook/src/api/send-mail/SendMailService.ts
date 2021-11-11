import { Request, Response } from "express";

import { ITransporter } from "../../types";


export class SendMailService {
  private transporter: ITransporter;

  async sendFirstEmail(req: Request, res: Response) {

  }

  async sendSecondEmail(req: Request, res: Response) {

  }
}
