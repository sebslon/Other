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
    this.router.get('/:id', CatsController.getCatById);
    this.router.post('/', CatsController.addCat);
    this.router.delete('/:id', CatsController.deleteCat);
    this.router.patch('/:id', CatsController.updateCat);
  }
}
