import nodemailer from "nodemailer";

import { IEmailMessage, ITransporter } from "../../../types";

class NodemailerTransporter implements ITransporter {
  private transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASSWORD,
    }
  })

  sendMessage(message: IEmailMessage): void {
    return this.transporter.sendMail(message, (err, info) => {
      if (err) {
        throw Error(err.message);
      }
    })
  }
}