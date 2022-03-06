import { Request, Response } from "express";
import jwt from "jsonwebtoken";

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
    const user = req.user as User;
    const payload = { id: user.id };

    const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!);

    res.cookie("token", token, { httpOnly: true });
    res.cookie("refresh_token", refreshToken, { httpOnly: true });

    res.status(200).send({
      message: "Authentication successful",
      user,
    });
  }
}
