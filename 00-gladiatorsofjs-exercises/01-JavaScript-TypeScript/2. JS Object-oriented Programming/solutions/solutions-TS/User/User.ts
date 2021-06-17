import { v4 as uuid } from "uuid";

import { Book } from "../Library/Book";

interface IUser {
  name: string;
  surname: string;
  books: Book[];
}

type Access = 'admin' | 'user';

export class User implements IUser {
  readonly _id: string;
  name: string;
  surname: string;
  email: string;
  dateOfBirth: Date;
  password: string;
  gender: string;
  access: Access;
  books: Book[];

  constructor(name: string, surname: string, email: string, password: string) {
    Validator.check('Name', name).isString().isNotEmpty().min(2).max(50);
    Validator.check('Surname', surname).isString().isNotEmpty().min(2).max(50);
    Validator.check('Email', email).isString().isNotEmpty().isValidEmail();

    this._id = uuid();
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = 'hashed-password';
    this.dateOfBirth = new Date();
    this.books = [];
  }
}