import { Strategy as Google, StrategyOptions } from "passport-google-oauth20";

import { User } from "../../../database/models/User.entity";

const options: StrategyOptions = {
  clientID: process.env.GOOGLE_ID!,
  clientSecret: process.env.GOOGLE_SECRET!,
  callbackURL: `http://localhost:${
    process.env.PORT || 3030
  }/api/auth/google/callback`,
  scope: ["email"],
};

export const googleStrategy = new Google(
  options,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({ googleId: profile.id });

      if (!user) {
        const user = User.create({
          name: profile.name?.givenName || profile.displayName || "",
          email: profile.emails ? profile.emails[0].value : "",
          googleId: profile.id,
        });

        await user.save();

        return done(null, user);
      } else {
        return done(null, user);
      }
    } catch (err: any) {
      return done(err, false);
    }
  }
);
