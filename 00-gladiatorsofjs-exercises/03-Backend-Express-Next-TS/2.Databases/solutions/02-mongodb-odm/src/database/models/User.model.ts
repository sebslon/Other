import { v4 as uuid } from 'uuid';

export interface UserInterface {
  name: string;
  dateOfBirth: Date;
  likes: string[];
  friends: number | string[];
}

export interface MongoUserInterface extends UserInterface {
  _id: string;
}

export class MongoUser {
  private _id: string;
  private name: string;
  private dateOfBirth: Date;
  private likes: string[];
  private friends: number | string[];

  constructor(data: MongoUserInterface) {
    this._id = data._id || uuid();
    this.name = data.name;
    this.dateOfBirth = data.dateOfBirth;
    this.likes = data.likes;
    this.friends = data.friends;
  }
}
