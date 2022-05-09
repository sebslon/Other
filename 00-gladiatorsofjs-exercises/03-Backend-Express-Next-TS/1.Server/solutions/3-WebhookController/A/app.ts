import express, { Application } from "express";

import { errorMiddleware } from "./src/middlewares/error-middleware";
import { logger } from "./src/middlewares/logger";

import { IRouter } from "./src/types";

export class App {
  private app: Application;
  private port = process.env.PORT || 3031;

  constructor(controllers: IRouter[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}...`);
    });
  }

  private initializeControllers(controllers: IRouter[]) {
    controllers.forEach((controller) => {
      this.app.use("/api" + controller.path, controller.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger);
    this.app.use(errorMiddleware);
  }

  private async connectToTheDatabase() {}
}
