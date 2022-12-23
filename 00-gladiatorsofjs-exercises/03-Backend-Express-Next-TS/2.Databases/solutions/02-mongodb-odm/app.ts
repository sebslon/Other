require('dotenv').config();
require('express-async-errors'); // Handling async errors in express (no need for try/catch)

const Mongo = require('mongodb');
import express, { Application } from 'express';

import { logger } from './src/middlewares/logger';
import { errorMiddleware } from './src/middlewares/error-middleware';

import { Server } from 'http';

import { IRouter } from '@app-types/requests';
import { runSeed } from './src/database/seeds/mongodb-seed';

export class App {
  private _server!: Server;
  private app: Application;
  private port = process.env.PORT || 3030;

  constructor(controllers: IRouter[]) {
    this.app = express();

    this.connectToTheDatabase().then(() => {
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
      this.initializeErrorMiddleware();
    });
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
    const mongoClient = Mongo.MongoClient;
    const client = new mongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();

      if (process.env.SHOULD_RUN_SEED) runSeed(client, 'users');

      console.log('Connected to the database');
    } catch (error) {
      console.log('Error connecting to the database', error);
    }
  }

  get server() {
    return this._server;
  }
}
