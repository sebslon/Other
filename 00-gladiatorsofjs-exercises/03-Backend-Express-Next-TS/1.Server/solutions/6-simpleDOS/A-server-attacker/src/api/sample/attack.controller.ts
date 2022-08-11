import { Response, Request } from 'express';

import { attackingService } from './attack.service';

export class AttackController {
  static attack(req: Request, res: Response) {
    const result = attackingService.attack();

    res.status(200).send(result);
  }
}
