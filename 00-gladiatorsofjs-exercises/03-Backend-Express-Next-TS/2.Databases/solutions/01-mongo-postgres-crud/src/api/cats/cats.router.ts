import { Router } from 'express';

import { IRouter } from '../../types';
import { CatsController } from './cats.controller';

export class CatsRouter implements IRouter {
  public path = '/cats';
  public router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', CatsController.getCats);
    this.router.post('/', CatsController.addCat);
  }
}
