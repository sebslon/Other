import express, { Application } from "express";

import { errorMiddleware } from "./src/middlewares/error-middleware";
import { logger } from "./src/middlewares/logger";

import { Server } from "http";

import { IRouter } from "./src/types";

export class App {
  private app: Application;
  private server!: Server;
  private port = process.env.PORT || 3030;

  constructor(controllers: IRouter[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  listen() {
    this.server = this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}...`);
    });
  }

  private initializeControllers(routers: IRouter[]) {
    routers.forEach((router) => {
      this.app.use("/api" + router.path, router.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger);
    this.app.use(errorMiddleware);
  }

  private async connectToTheDatabase() {}

  get appForTest() {
    return this.server;
  }
}
