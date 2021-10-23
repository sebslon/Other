import { Gender, User } from "./User";
import { Admin } from "./Admin";

export class App {
  public listOfUsers: (User | Admin)[] = [];

  createUser(
    name: string,
    surname: string,
    email: string,
    password: string,
    gender: Gender
  ) {
    const user = new User(name, surname, email, password, gender);
    this.listOfUsers.push(user);

    return user;
  }

  createAdmin(
    name: string,
    surname: string,
    email: string,
    password: string,
    gender: Gender
  ) {
    const admin = new Admin(name, surname, email, password, gender);
    this.listOfUsers.push(admin);

    return admin;
  }

  getUserById(id: string) {
    const user = this.listOfUsers.find((user) => user._id === id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}