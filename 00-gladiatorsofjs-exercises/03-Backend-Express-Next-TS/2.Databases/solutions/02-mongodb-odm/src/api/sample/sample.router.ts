import { Router } from 'express';

import { IRouter } from '@app-types/requests';

import { SampleController } from './sample.controller';

export class SampleRouter implements IRouter {
  public path = '/example';
  public router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/hello', SampleController.sayHello);
  }
}
