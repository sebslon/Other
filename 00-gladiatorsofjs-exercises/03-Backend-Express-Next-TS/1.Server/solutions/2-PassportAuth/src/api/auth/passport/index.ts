import passport from "passport";

import { facebookStrategy } from "./facebook.strategy";

passport.use(facebookStrategy);

export default passport;
