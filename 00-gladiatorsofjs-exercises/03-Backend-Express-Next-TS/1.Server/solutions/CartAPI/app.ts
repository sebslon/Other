import express, { Application, NextFunction, Request, Response } from "express";
import { errorMiddleware } from "./src/middlewares/error-middleware";

import { Controller } from "./src/types";

export class App {
  private app: Application;
  private port = process.env.PORT || 3000;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}...`);
    })
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api' + controller.path, controller.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private connectToTheDatabase() {
    //
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}
