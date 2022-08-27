require('express-async-errors'); // Handling async errors in express (no need for try/catch)
require('dotenv').config(); // Load environment variables from .env file

import mongoose from 'mongoose';
import express, { Application } from 'express';

import { logger } from './src/middlewares/logger';
import { errorMiddleware } from './src/middlewares/error-middleware';

import { Server } from 'http';

import { IRouter } from './src/types';

export class App {
  private _server!: Server;
  private app: Application;
  private port = process.env.PORT || 3000;

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
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger);
  }

  private initializeErrorMiddleware() {
    this.app.use(errorMiddleware);
  }

  private async connectToTheDatabase() {
    const mongoDbHost = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:27017/${process.env.MONGODB_DBNAME}`;

    try {
      // Knex is initialized in - src/database/knex/index.ts

      mongoose
        .connect(mongoDbHost)
        .then((res) => console.log('Connected to MongoDB database'));
    } catch (err) {
      console.error('Failed to connect database: ' + err);
    }
  }

  get server() {
    return this._server;
  }
}
