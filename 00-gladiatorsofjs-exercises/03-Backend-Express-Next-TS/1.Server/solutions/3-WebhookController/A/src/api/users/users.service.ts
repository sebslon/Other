import { Request, Response } from "express";
import { findValueInArray } from "../../helpers";

import { UserWithAmountOfBoughtProducts } from "../../types";

export class UsersService {
  private users: Array<string> = [];
  private onlineUsers: Array<string> = [];
  private offlineUsers: Array<string> = [];
  private usersWhichBoughtSomething: Array<UserWithAmountOfBoughtProducts> = [];

  addUser(req: Request, res: Response) {
    const name = req.params.name;

    this.checkName(name);

    const user = findValueInArray(name, this.users);
    if (user) {
      throw Error("User already exists.");
    }

    this.users.push(name);

    res.status(204).send({ success: true });
  }

  userBoughtSomething(req: Request, res: Response) {
    const userName = req.params.name;
    const productsAmount = req.body.amount;

    this.checkName(userName);
    this.checkIfUserExist(userName);
    this.checkAmountOfProducts(productsAmount);

    const user = this.usersWhichBoughtSomething.find(
      ({ name }) => name === userName
    );
    if (user) {
      user.amount += productsAmount;
      return res.status(200).send(user);
    } else {
      const data = { name: userName, amount: productsAmount };
      this.usersWhichBoughtSomething.push(data);

      return res.status(201).send(data);
    }
  }

  public userLoggedIn(req: Request, res: Response) {
    const { name } = req.params;

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

    return res.status(200).send({ success: true });
  }

  public userLoggedOut(req: Request, res: Response) {
    const { name } = req.params;

    this.checkName(name);
    this.checkIfUserExist(name);
    this.checkIsUserAlreadyOffline(name);

    const onlineUser = findValueInArray(name, this.onlineUsers);
    if (onlineUser) {
      this.onlineUsers = this.onlineUsers.filter((user) => user != user);
    }
    this.offlineUsers.push(name);

    return res.status(200).send({ success: true });
  }

  // ## PRIVATE METHODS ## //

  private checkName(name: string) {
    if (!name) {
      throw Error("Provide name to create an user.");
    }
  }

  private checkIfUserExist(name: string) {
    const userExist = findValueInArray(name, this.users);
    if (!userExist) {
      throw Error("User not exist!");
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
