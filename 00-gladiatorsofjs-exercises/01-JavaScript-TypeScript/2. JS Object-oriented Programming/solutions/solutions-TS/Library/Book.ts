import { v4 as uuid } from "uuid";
import Validator from "../utils/Validator";

interface IBook {
  title: string;
  author: string;
  picture: string;
  description: string;
  setImage: (img: string) => void;
  setDescription: (description: string) => void;
}

export class Book implements IBook {
  private readonly _id;
  title: string;
  author: string;
  picture: string;
  description: string;
  
  constructor(title: string, author: string) {
    Validator.check('Title', title).isString().isNotEmpty();
    Validator.check('Author', author).isString().isNotEmpty();

    this._id = uuid();
    this.title = title;
    this.author = author;
    this.picture = '';
    this.description = '';
  };

  setImage(img: string) {
    Validator.check('Image', img).isString();

    this.picture = img;
  }

  setDescription(description: string) {
    Validator.check('Description', description).isString();

    this.description = description;
  }
}
