import { v4 as uuid } from "uuid";

import Validator from "../utils/Validator";

interface IUser {
  readonly _id: string;
  name: string;
  surname: string;
  email: string;
  dateOfBirth: Date;
  password: string;
  gender: Gender;
}

export type Access = "admin" | "user";
export type Gender = "man" | "woman";

export class User implements IUser {
  readonly _id: string;
  protected access: Access = "user";
  name: string;
  surname: string;
  email: string;
  dateOfBirth: Date;
  password: string;
  gender: Gender;

  constructor(
    name: string,
    surname: string,
    email: string,
    password: string,
    gender: Gender
  ) {
    Validator.check("Name", name).isString().isNotEmpty().min(2).max(50);
    Validator.check("Surname", surname).isString().isNotEmpty().min(2).max(50);
    Validator.check("Email", email).isString().isNotEmpty().isValidEmail();
    Validator.check("Password", password).min(8).isStrongPassword();

    this._id = uuid();
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.dateOfBirth = new Date();
  }

  changePassword(password: string) {
    Validator.check("Password", password).min(8).isStrongPassword();
    this.password = password;
  }

  changeEmail(email: string) {
    Validator.check("Email", email).isNotEmpty().isValidEmail();
    this.email = email;
  }

  setAccess(user: User, access: Access) {
    if (this.access === "admin") {
      user.access = access;
    } else {
      throw new Error("You don't have enough permission.");
    }
  }

  getAccess() {
    return this.access;
  }
}
