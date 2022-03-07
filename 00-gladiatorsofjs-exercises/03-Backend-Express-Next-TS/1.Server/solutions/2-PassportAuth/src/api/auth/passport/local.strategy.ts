import { Strategy as Local, IStrategyOptions } from "passport-local";

import { User } from "../../../database/models/User.entity";

const options: IStrategyOptions = {
  usernameField: "email",
  passwordField: "password",
};

export const localStrategy = new Local(
  options,
  async (email, password, done) => {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return done({ isPassport: true, message: "Invalid credentials." }, false);
    }

    const passwordMatch = await user.checkPassword(password);
    if (!passwordMatch) {
      return done({ isPassport: true, message: "Invalid credentials." }, false);
    }

    return done(null, user);
  }
);
