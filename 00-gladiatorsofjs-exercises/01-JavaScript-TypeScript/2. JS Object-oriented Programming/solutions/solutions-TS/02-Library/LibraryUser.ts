import { v4 as uuid } from "uuid";

import { Book } from "./Book";

export class LibraryUser {
  readonly _id: string;
  name: string;
  surname: string;
  books: Book[];

  constructor(name: string, surname: string) {
    this._id = uuid();
    this.name = name;
    this.surname = surname;
    this.books = [];
  }
}