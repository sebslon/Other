require("express-async-errors"); // Handling async errors in express (no need for try/catch)
require("dotenv").config();

import express, { Application } from "express";
import { scheduleJob } from "node-schedule";

import { logger } from "./src/middlewares/logger";
import { errorMiddleware } from "./src/middlewares/error-middleware";

import { Server } from "http";

import { IRouter } from "./src/types";
import { emailService } from "./src/services/email-service.service";
import { cronInterval } from "./src/cron/cron-interval";

export class App {
  private _server!: Server;
  private app: Application;
  private port = process.env.PORT || 3010;

  constructor(controllers: IRouter[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeCronJobs();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorMiddleware();
  }

  listen() {
    this._server = this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}...`);
    });
  }

  private initializeControllers(controllers: IRouter[]) {
    controllers.forEach((controllers) => {
      this.app.use("/api" + controllers.path, controllers.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger);
  }

  private initializeErrorMiddleware() {
    this.app.use(errorMiddleware);
  }

  private initializeCronJobs() {
    scheduleJob(cronInterval.EVERY_20_MINUTES, () => {
      console.info("Sending scheduled email..");

      emailService.sendEmail(
        process.env.EMAIL_RECEIVER!,
        process.env.EMAIL_SUBJECT!,
        process.env.EMAIL_TEXT!,
        process.env.EMAIL_HTML!
      );
    });
  }

  private async connectToTheDatabase() {}

  get server() {
    return this._server;
  }
}
