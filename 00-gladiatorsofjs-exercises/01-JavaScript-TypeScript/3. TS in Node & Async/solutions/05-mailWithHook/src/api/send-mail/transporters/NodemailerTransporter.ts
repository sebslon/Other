import nodemailer from "nodemailer";

import { IEmailMessage, ITransporter } from "../../../types";

class NodemailerTransporter implements ITransporter {
  private transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_LOGIN,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: process.env.GMAIL_ACCESS_TOKEN,
    },
  });

  sendMessage(message: IEmailMessage): void {
    return this.transporter.sendMail(message, (err, info) => {
      if (err) {
        throw Error(err.message);
      } else {
        return info;
      }
    });
  }
}

export const nodemailerTransporter = new NodemailerTransporter();

// https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
