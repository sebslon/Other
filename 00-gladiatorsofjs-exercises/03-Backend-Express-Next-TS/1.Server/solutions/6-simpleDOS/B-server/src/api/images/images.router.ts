import { Router } from 'express';

import { IRouter } from '../../types';

import { ImagesController } from './images.controller';

export class ImagesRouter implements IRouter {
  public path = '/images';
  public router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/first', ImagesController.sendFirstImage);
    this.router.get('/second', ImagesController.sendSecondImage);
  }
}
