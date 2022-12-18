export interface User {
  name: string;
  dateOfBirth: Date;
  likes: string[];
  friends: number | string[];
}

export interface MongoUser extends User {
  _id: string;
}
