import {
  Strategy as Facebook,
  StrategyOption,
  Profile,
} from "passport-facebook";

import { User } from "../../../database/models/User.entity";

const options: StrategyOption = {
  clientID: process.env.FACEBOOK_APP_ID!,
  clientSecret: process.env.FACEBOOK_APP_SECRET!,
  callbackURL: "http://localhost:3030/api/auth/facebook/callback",
};

export const facebookStrategy = new Facebook(
  options,
  async (accessToken, refreshToken, profile: Profile, done) => {
    try {
      const user = await User.findOne({ facebookId: profile.id });

      if (!user) {
        const user = User.create({
          name: profile.name?.givenName || profile.displayName || "",
          email: profile.emails ? profile.emails[0].value : "",
          facebookId: profile.id,
        });

        await user.save();

        return done(null, user);
      } else {
        return done(null, user);
      }
    } catch (err) {
      return done(err, false);
    }
  }
);
