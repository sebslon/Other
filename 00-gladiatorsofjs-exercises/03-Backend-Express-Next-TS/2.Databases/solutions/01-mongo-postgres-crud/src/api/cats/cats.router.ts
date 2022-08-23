import { Router } from 'express';

import { IRouter } from '../../types';

export class CatsRouter implements IRouter {
  public path = '/cats';
  public router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {}
}
