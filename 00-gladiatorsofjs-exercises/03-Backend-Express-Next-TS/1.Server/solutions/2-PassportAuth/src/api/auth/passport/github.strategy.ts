import { Strategy as GitHub, StrategyOptions } from "passport-github2";

import { User } from "../../../database/models/User.entity";

const options: StrategyOptions = {
  clientID: process.env.GITHUB_ID!,
  clientSecret: process.env.GITHUB_SECRET!,
  callbackURL: `http://localhost:${
    process.env.PORT || 3030
  }/api/auth/github/callback`,
};

export const githubStrategy = new GitHub(
  options,
  async (accessToken: string, refreshToken: string, profile, done) => {
    try {
      console.log({ profile });
      const user = await User.findOne({ githubId: profile.id });

      if (!user) {
        const user = User.create({
          name: profile.name?.givenName || profile.displayName || "",
          email: profile.emails ? profile.emails[0].value : "",
          githubId: profile.id,
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
