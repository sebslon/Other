import { v4 as uuid } from "uuid";

import { Access, Gender, User } from "./User";

export class Admin extends User {
  readonly _id: string;
  protected access: Access = 'admin';

  constructor(
    name: string,
    surname: string,
    email: string,
    password: string,
    gender: Gender
  ) {
    super(name, surname, email, password, gender);
    this._id = uuid();
  }
}