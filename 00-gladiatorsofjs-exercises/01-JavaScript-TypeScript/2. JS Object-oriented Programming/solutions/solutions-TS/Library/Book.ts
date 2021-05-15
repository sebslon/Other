import { v4 as uuid } from "uuid";

interface IBook {
  title: string;
  author: string;
  picture: string;
  description: string;
}

export class Book implements IBook {
  private readonly _id;
  title: string;
  author: string;
  picture: string;
  description: string;
  
  constructor(title: string, author: string) {
    this._id = uuid();
    this.title = title;
    this.author = author;
    this.picture = '';
    this.description = '';
  };

  addImage(img: string) {
    this.picture = img;
  }

  addDescription(description: string) {
    this.description = description;
  }
}
