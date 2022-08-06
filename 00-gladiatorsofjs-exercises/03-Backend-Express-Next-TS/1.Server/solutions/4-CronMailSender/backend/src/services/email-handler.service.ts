import nodemailer, { Transporter } from 'nodemailer';

class EmailHandler {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  public async sendEmail(
    to: string,
    subject: string,
    text: string,
    html: string
  ) {
    const mailOptions = {
      from: '',
      to,
      subject,
      text,
      html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

export const emailService = new EmailHandler();
