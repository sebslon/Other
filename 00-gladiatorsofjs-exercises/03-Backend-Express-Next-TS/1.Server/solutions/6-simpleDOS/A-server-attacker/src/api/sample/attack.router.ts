import { Router } from 'express';

import { IRouter } from '../../types';

import { AttackController } from './attack.controller';

export class AttackingRouter implements IRouter {
  public path = '/';
  public router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/attack', AttackController.attack);
  }
}
