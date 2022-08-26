import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

import { ICat } from '../../database/models/Cat/Cat';
import { CatsService } from './cats.service';
export class CatsController {
  static async getCatById(
    req: Request<{ id: string }, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    const catsService = new CatsService(db);
    const cat = await catsService.getCat(id);

    res.status(200).send(cat);
  }

  static async getCats(
    req: Request<{}, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;

    const catsService = new CatsService(db);
    const cats = await catsService.getAll();

    res.status(200).send(cats);
  }

  static async addCat(req: Request<{}, {}, ICat, {}>, res: Response) {
    const { name, age, colour, sex } = req.body;

    let mongoCatsService = new CatsService('mongo');
    let postgresCatsService = new CatsService('postgres');

    const commonId = uuid();

    const results = await Promise.allSettled([
      postgresCatsService.addCat({
        name,
        age,
        colour,
        sex,
        common_id: commonId,
      }),
      mongoCatsService.addCat({ name, age, colour, sex, common_id: commonId }),
    ]);

    const anyInsertFailed = results.find(({ status }) => status === 'rejected');

    if (anyInsertFailed) {
      await Promise.allSettled([
        mongoCatsService.deleteCatByCommonId(commonId),
        postgresCatsService.deleteCatByCommonId(commonId),
      ]);

      res.status(400).send('Failed adding cat.');
    }

    res.send(results);
  }

  static async deleteCat(
    req: Request<{ id: string }, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    const catsService = new CatsService(db);

    await catsService.deleteCat(id);

    res.status(200).send({ success: true });
  }

  static async updateCat(
    req: Request<{ id: string }, {}, ICat, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    const catsService = new CatsService(db);

    const cat = await catsService.updateCat(id, req.body);

    res.status(200).send(cat);
  }
}
