import { v4 as uuid } from "uuid";

import Validator from "../utils/Validator";

export class Contact {
  id: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(
    public name: string,
    public surname: string,
    public email: string
  ) {
    this.id = uuid();
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  changeName(name: string) {
    Validator.check("Name", name).isString().isNotEmpty();

    this.updatedAt = new Date();
    this.name = name;
  }

  changeSurname(surname: string) {
    Validator.check("Surame", surname).isString().isNotEmpty();

    this.updatedAt = new Date();
    this.surname = surname;
  }

  changeMail(email: string) {
    Validator.check("Email", email).isNotEmpty().isValidEmail();

    this.updatedAt = new Date();
    this.email = email;
  }
}
