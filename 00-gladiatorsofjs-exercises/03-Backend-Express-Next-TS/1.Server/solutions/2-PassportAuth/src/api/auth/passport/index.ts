import passport from "passport";

import { localStrategy } from "./local.strategy";
import { facebookStrategy } from "./facebook.strategy";

passport.use(localStrategy);
passport.use(facebookStrategy);

export default passport;
