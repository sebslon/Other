import { createConnection } from "typeorm";
import express, { Application } from "express";
import session from "express-session";
import passport from "./src/api/auth/passport";

import { Controller } from "./src/types";
import { errorMiddleware } from "./src/middlewares/error-middleware";

export class App {
  private app: Application;
  private port = process.env.PORT || 3030;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.app.use(express.static("client"));

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}...`);
    });
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/api" + controller.path, controller.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(
      session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET! || "secret",
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());

    passport.serializeUser(function (user, cb) {
      cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
      cb(null, obj);
    });

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private async connectToTheDatabase() {
    const PORT: number = process.env.PORT! as unknown as number;

    createConnection({
      type: "postgres",
      host: process.env.POSTGRES_HOST! || "localhost",
      port: PORT || 5432,
      username: process.env.POSTGRES_USERNAME! || "postgres",
      password: process.env.POSTGRES_PASSWORD! || "postgres",
      database: process.env.POSTGRES_DB! || "auth-postgres",
      entities: [__dirname + "/**/*.entity.ts"],
      synchronize: true,
    }).then(() => console.log("Connected to the database."));
  }

  private async initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}
