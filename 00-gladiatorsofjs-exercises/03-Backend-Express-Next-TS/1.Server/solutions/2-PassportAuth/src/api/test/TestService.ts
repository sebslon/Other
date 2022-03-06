import { Request, Response } from "express";
import { User } from "../../database/models/User.entity";

export class TestService {
  constructor() {}

  sayHello(req: Request, res: Response) {
    return res.status(200).send("Hello !");
  }

  async createUser(req: Request, res: Response) {
    const user = User.create();
    user.name = req.body.name || "Sebastian";
    user.email = req.body.email || "sebastian@mail.com";

    user.password = await user.hashPassword(req.body.password || "password");

    await user.save();

    return res.status(201).send({ message: "User Created", user });
  }
}
