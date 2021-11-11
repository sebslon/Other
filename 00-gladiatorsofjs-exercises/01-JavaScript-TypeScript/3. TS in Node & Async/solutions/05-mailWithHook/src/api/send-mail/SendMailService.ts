import queryString from "query-string";
import { Request, Response } from "express";

import { ITransporter } from "../../types";

export class SendMailService {
  private transporter: ITransporter;

  constructor(transporter: ITransporter) {
    this.transporter = transporter;
  }

  async sendFirstEmail(req: Request, res: Response) {
    const { receiver } = req.body;

    if (!receiver) {
      throw new Error("No receiver.");
    }

    if (!process.env.EMAIL_LOGIN) {
      throw new Error("Sender email is required");
    }

    const linkToSecondEmail = `http://localhost:${
      process.env.PORT || 3000
    }/api/email/second?email=${receiver}`;

    const message = {
      from: process.env.EMAIL_LOGIN,
      to: receiver,
      subject: "First Email",
      html: `
        <html>
        <body>
        <strong>Hello!</strong> Click here to confirm your email ---> 
        <<a href=${linkToSecondEmail}> Here!</a>>
        </body>
        </html>,
        `,
      auth: {
        user: process.env.EMAIL_LOGIN,
      },
    };

    this.transporter.sendMessage(message);

    res.status(200).json({
      message: "Confirmation email has been sent.",
    });
  }

  async sendSecondEmail(req: Request, res: Response) {
    const { email } = req.query;

    if (typeof email !== "string") {
      throw new Error("Something went wrong");
    }

    if (!process.env.EMAIL_LOGIN) {
      throw new Error("Sender email is required");
    }

    const message = {
      from: process.env.EMAIL_LOGIN,
      to: email,
      subject: "You are good to go.",
      html: `Your email has been confirmed.`,
    };

    this.transporter.sendMessage(message);

    res.status(200).json({
      message: "Email confirmed.",
    });
  }
}
