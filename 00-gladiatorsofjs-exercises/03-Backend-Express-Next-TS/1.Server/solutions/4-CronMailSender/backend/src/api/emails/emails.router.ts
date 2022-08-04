import { Router, Request, Response } from 'express';

import { IRouter } from '../../types';

import { emailsController } from './emails.controller';

export class EmailsRouter implements IRouter {
  public path = '/emails';
  public router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/:id', (req: Request, res: Response) =>
      emailsController.getEmail(req, res)
    );

    this.router.post('/:id/visit', (req: Request, res: Response) =>
      emailsController.visitEmail(req, res)
    );
  }
}
