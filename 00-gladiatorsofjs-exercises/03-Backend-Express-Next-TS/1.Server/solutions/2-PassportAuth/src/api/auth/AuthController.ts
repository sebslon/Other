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
    this.router.post(
      "/login",
      passport.authenticate("local"),
      handleErrors(this.authService.authenticateUser)
    );

    this.router.get("/facebook", passport.authenticate("facebook"));
    this.router.get(
      "/facebook/callback",
      passport.authenticate("facebook", {
        successRedirect: "/",
        failureRedirect: "/login-failed",
        failureMessage: true,
      }),
      this.authService.authenticateUser
    );

    this.router.get("/google", passport.authenticate("google"));
    this.router.get(
      "/google/callback",
      passport.authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/login-failed",
      }),
      this.authService.authenticateUser
    );

    this.router.get(
      "/github",
      passport.authenticate("github", { scope: ["user:email"] })
    );

    this.router.get(
      "/github/callback",
      passport.authenticate("github", { failureRedirect: "/login" }),
      this.authService.authenticateUser
    );
  }
}
