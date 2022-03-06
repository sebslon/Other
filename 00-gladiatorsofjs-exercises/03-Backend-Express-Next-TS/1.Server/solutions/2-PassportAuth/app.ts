import express, { Application } from "express";

import { Controller } from "./src/types";
import { errorMiddleware } from "./src/middlewares/error-middleware";
import { createConnection } from "typeorm";

export class App {
  private app: Application;
  private port = process.env.PORT || 3030;

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
    });
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/api" + controller.path, controller.router);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private async connectToTheDatabase() {
    createConnection({
      type: "postgres",
      host: (process.env.POSTGRES_HOST as string) || "localhost",
      port: (process.env.PORT as unknown as number) || 5432,
      username: (process.env.POSTGRES_USERNAME as string) || "postgres",
      password: (process.env.POSTGRES_PASSWORD as string) || "postgres",
      database: (process.env.POSTGRES_DB as string) || "auth-postgres",
      entities: [__dirname + "/**/*.entity.ts"],
      synchronize: true,
    }).then(() => console.log("Connected to the database."));
  }

  private async initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}
