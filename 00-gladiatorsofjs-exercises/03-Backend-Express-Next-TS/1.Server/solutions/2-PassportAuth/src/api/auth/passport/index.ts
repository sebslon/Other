import passport from "passport";

import { localStrategy } from "./local.strategy";
import { facebookStrategy } from "./facebook.strategy";
import { googleStrategy } from "./google.strategy";
import { githubStrategy } from "./github.strategy";

passport.use(localStrategy);
passport.use(googleStrategy);
passport.use(facebookStrategy);
passport.use(githubStrategy);

export default passport;
