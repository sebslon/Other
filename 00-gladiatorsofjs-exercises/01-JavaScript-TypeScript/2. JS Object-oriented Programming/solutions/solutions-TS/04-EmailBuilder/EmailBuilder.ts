import { Email } from "./types";
import Validator from "../utils/Validator";

export class EmailBuilder {
  private mail: Email;

  constructor(from: string, to: string) {
    Validator.check("Sender", from).isNotEmpty().isString().isValidEmail();
    Validator.check("Receiver", to).isNotEmpty().isString().isValidEmail();

    this.mail = { from, to, title: "", html: "", cc: [], bcc: [] };
  }

  setTitle(title: string) {
    Validator.check("Title", title).isNotEmpty();

    this.mail.title = title;
    return this;
  }

  setHTML(html: string) {
    this.mail.html = html;
    return this;
  }

  addCC(cc: string[]) {
    cc.forEach((cc) => this.mail.cc.push(cc));
    return this;
  }

  addBCC(bcc: string[]) {
    bcc.forEach((bcc) => this.mail.bcc.push(bcc));
    return this;
  }

  build(): Email {
    return this.mail;
  }
}
