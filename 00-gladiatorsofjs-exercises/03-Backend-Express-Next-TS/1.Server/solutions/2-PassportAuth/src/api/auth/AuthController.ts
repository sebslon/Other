import { Router } from "express";

import { Controller } from "../../types";
import { handleErrors } from "../../helpers/handleErrors";

import { AuthService } from "./AuthService";
import passport from "./passport";

export class AuthController implements Controller {
  public path = "/auth";
  public router: Router;

  private authService = new AuthService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/sign-in", handleErrors(this.authService.signIn));
    this.router.get("/facebook", passport.authenticate("facebook"));
    this.router.get(
      "/facebook/callback",
      passport.authenticate("facebook", {
        failureRedirect: "/login-failed",
        successRedirect: "/",
      }),
      this.authService.authenticateUser
    );
  }
}
