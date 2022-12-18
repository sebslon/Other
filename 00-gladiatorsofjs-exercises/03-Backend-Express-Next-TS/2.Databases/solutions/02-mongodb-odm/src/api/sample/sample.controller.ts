import { Response } from 'express';

import { TRequestQueryP } from '@app-types/requests';

import { sampleService } from './sample.service';

export class SampleController {
  static sayHello(req: TRequestQueryP<{ name: string }>, res: Response) {
    const result = sampleService.sayHelloFromUser(req.query.name);

    res.status(200).send(result);
  }
}
