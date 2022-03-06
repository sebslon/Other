import { Request, Response } from "express";

import { User } from "../../database/models/User.entity";

export class AuthService {
  constructor() {}

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).send("User doesn't exist");

    if (await user.checkPassword(password)) {
      return res.status(200).json("Successful login");
    } else {
      return res.status(404).json("Wrong password.");
    }
  }

  authenticateUser(req: Request, res: Response) {
    console.log("USER IS AUTHENTICATED");
  }
}
