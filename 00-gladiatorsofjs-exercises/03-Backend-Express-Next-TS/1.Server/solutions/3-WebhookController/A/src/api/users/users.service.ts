import { findValueInArray } from "../../helpers";

import { Buyer } from "../../types";

export class UsersService {
  private users: Array<string> = [];
  private onlineUsers: Array<string> = [];
  private offlineUsers: Array<string> = [];
  private usersWhichBoughtSomething: Array<Buyer> = [];

  addUser(name: string) {
    this.checkName(name);

    const user = findValueInArray(name, this.users);

    if (user) {
      throw new Error("User already exists.");
    }

    this.users.push(name);
  }

  userBoughtSomething(name: string, productsAmount: number): Buyer {
    this.checkName(name);
    this.checkIfUserExist(name);
    this.checkAmountOfProducts(productsAmount);

    const user = this.usersWhichBoughtSomething.find(
      ({ name }) => name === name
    );

    if (user) {
      user.amountOfBoughtProducts += productsAmount;
    } else {
      const data = { name, amountOfBoughtProducts: productsAmount };
      this.usersWhichBoughtSomething.push(data);

      return data;
    }

    return user;
  }

  public userLoggedIn(name: string) {
    this.checkName(name);
    this.checkIfUserExist(name);
    this.checkIsUserAlreadyOnline(name);

    const offlineUser = findValueInArray(name, this.offlineUsers);
    if (offlineUser) {
      this.offlineUsers = this.offlineUsers.filter(
        (user) => user != offlineUser
      );
    }
    this.onlineUsers.push(name);
  }

  public userLoggedOut(name: string) {
    this.checkName(name);
    this.checkIfUserExist(name);
    this.checkIsUserAlreadyOffline(name);

    const onlineUser = findValueInArray(name, this.onlineUsers);
    if (onlineUser) {
      this.onlineUsers = this.onlineUsers.filter((user) => user != user);
    }
    this.offlineUsers.push(name);
  }

  // ## PRIVATE METHODS ## //

  private checkName(name: string) {
    if (!name) {
      throw new Error("Provide name to create an user.");
    }
    if (typeof name !== "string") {
      throw new Error("User name should be a string.");
    }
  }

  private checkIfUserExist(name: string) {
    const userExist = findValueInArray(name, this.users);
    if (!userExist) {
      throw new Error("User does not exist!");
    }
    return true;
  }

  private checkIsUserAlreadyOnline(name: string) {
    const userAlreadyLogged = findValueInArray(name, this.onlineUsers);
    if (userAlreadyLogged) {
      throw Error("User is already online!");
    }
  }

  private checkIsUserAlreadyOffline(name: string) {
    const userAlreadyOffline = findValueInArray(name, this.offlineUsers);
    if (userAlreadyOffline) {
      throw Error("User is already offline!");
    }
  }

  private checkAmountOfProducts(amount: number) {
    if (amount <= 0) {
      throw Error("Invalid amount!");
    }
  }
}
