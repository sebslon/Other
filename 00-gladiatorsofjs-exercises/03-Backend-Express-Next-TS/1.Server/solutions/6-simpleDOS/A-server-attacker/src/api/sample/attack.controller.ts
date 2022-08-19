import { Response } from 'express';

import { TRequestBody } from '../../types';

import { attackingService } from './attack.service';

export class AttackController {
  static async attack(
    req: TRequestBody<{ urls: string[]; requestsAmount: number }>,
    res: Response
  ) {
    const { urls, requestsAmount } = req.body;

    const result = await attackingService.attack(urls, requestsAmount);

    res.status(200).send(result);
  }
}
