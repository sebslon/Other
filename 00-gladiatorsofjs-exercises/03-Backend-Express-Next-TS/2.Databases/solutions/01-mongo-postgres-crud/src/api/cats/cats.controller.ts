import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

import { knex } from '../../database/knex';
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
    const cat = await catsService.getCatById(id);

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

      res.status(400).send('Failed to add cat.');
    }

    res.send({ message: 'success' });
  }

  static async deleteCat(
    req: Request<{ id: string }, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    const catsService = new CatsService(db);
    const cat = await catsService.getCatById(id);

    if (!cat) return res.status(400).send({ message: 'Cat not found!' });

    const commonId = cat.common_id;

    if (!commonId) {
      await catsService.deleteCat(id);

      return res.status(200).send({ message: 'success' });
    } else {
      await knex
        .transaction(async (trx) => {
          await trx.del().from('cats').where({ common_id: commonId });

          if (db === 'postgres') catsService.switchDatabase();

          await catsService.deleteCatByCommonId(commonId);
        })
        .then(() => {
          res.status(200).send({ success: true });
        })
        .catch(() => {
          res.status(400).send({ success: false });
        });
    }
  }

  static async updateCat(
    req: Request<{ id: string }, {}, ICat, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    const catsService = new CatsService(db);

    const oldCat = await catsService.getCatById(id);
    if (!oldCat) return res.status(400).send({ message: 'Cat not found!' });

    const commonId = oldCat.common_id;

    if (!commonId) {
      catsService.updateCat(id, req.body);

      return res.status(200).send({ message: 'success' });
    }

    try {
      await catsService.updateCatByCommonId(commonId, req.body);
      catsService.switchDatabase(); // Update another one
      await catsService.updateCatByCommonId(commonId, req.body);
    } catch (err) {
      console.error(err);
      delete oldCat.id;

      // reverse first operation
      catsService.switchDatabase();
      await catsService.updateCatByCommonId(commonId, oldCat);

      return res.status(400).send({ message: 'Failed to update cat.' });
    }

    res.status(200).send({ message: 'success' });
  }
}
