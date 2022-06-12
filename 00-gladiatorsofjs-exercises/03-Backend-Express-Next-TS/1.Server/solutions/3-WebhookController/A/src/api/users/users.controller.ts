import { Request, Response } from "express";

import { UsersService } from "./users.service";

export class UsersController {
  private usersService: UsersService = new UsersService();

  addUser(req: Request, res: Response) {
    this.usersService.addUser(req.params.name);

    return res.status(201).send({ success: true });
  }

  userLoggedIn(req: Request, res: Response) {
    this.usersService.userLoggedIn(req.params.name);

    return res.status(200).send({ success: true });
  }

  userLoggedOut(req: Request, res: Response) {
    this.usersService.userLoggedOut(req.params.name);

    return res.status(200).send({ success: true });
  }
  userBoughtSomething(req: Request, res: Response) {
    const user = this.usersService.userBoughtSomething(
      req.params.name,
      req.body.amount
    );

    return res.status(200).send(user);
  }
}
