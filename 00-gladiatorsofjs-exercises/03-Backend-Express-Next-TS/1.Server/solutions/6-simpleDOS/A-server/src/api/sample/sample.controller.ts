import { Response } from "express";

import { TRequestQueryP } from "../../types";

import { inMemoryRepository } from "../../database/memory";

import { SampleService } from "./sample.service";

export class SampleController {
  private sampleService: SampleService = new SampleService(inMemoryRepository);

  sayHello(req: TRequestQueryP<{ name: string }>, res: Response) {
    const result = this.sampleService.sayHelloFromUser(req.query.name);

    res.status(200).send(result);
  }
}
