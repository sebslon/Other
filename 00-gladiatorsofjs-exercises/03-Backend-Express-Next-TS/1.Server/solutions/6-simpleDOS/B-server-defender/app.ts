require('express-async-errors'); // Handling async errors in express (no need for try/catch)

import helmet from 'helmet';
import express, { Application } from 'express';

import { errorMiddleware } from './src/middlewares/error-middleware';
import { requestsRateLimiter } from './src/middlewares/requests-rate-limiter';

import { Server } from 'http';

import { IRouter } from './src/types';

export class App {
  private _server!: Server;
  private app: Application;
  private port = process.env.PORT || 3031;

  constructor(controllers: IRouter[]) {
    this.app = express();

    this.connectToTheDatabase();
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
      this.app.use('/api' + controllers.path, controllers.router);
    });
  }

  private initializeMiddlewares() {
    // Security middlewares
    this.app.use(express.json({ limit: '10kb' }));
    this.app.use(requestsRateLimiter);
    this.app.use(helmet());
    //

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // this.app.use(logger);
  }

  private initializeErrorMiddleware() {
    this.app.use(errorMiddleware);
  }

  private async connectToTheDatabase() {}

  get server() {
    return this._server;
  }
}
