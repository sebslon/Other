import { Request, Response } from 'express';
import { ICat } from '../../database/models/Cat/Cat';
import { MongoCat } from '../../database/models/Cat/MongoCat';
import { AppError } from '../../utils/error';
import { CatsService } from './cats.service';
export class CatsController {
  static async getCatById(
    req: Request<{ id: string }, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    CatsController.validateDbQueryParam(db);

    const catsService = new CatsService(db);
    const cat = await catsService.getCat(id);

    res.status(200).send(cat);
  }

  static async getCats(
    req: Request<{}, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;

    CatsController.validateDbQueryParam(db);

    const catsService = new CatsService(db);
    const cats = await catsService.getAll();

    res.status(200).send(cats);
  }

  static async addCat(
    req: Request<{}, {}, ICat, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { name, age, colour, sex } = req.body;

    CatsController.validateDbQueryParam(db);

    const catsService = new CatsService(db);
    const cat = await catsService.addCat({ name, age, colour, sex });

    res.status(201).send(cat);
  }

  static async deleteCat(
    req: Request<{ id: string }, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { id } = req.params;

    CatsController.validateDbQueryParam(db);

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

    CatsController.validateDbQueryParam(db);

    const catsService = new CatsService(db);

    const cat = await catsService.updateCat(id, req.body);

    res.status(200).send(cat);
  }

  // PRIVATE METHODS

  private static validateDbQueryParam(db: string) {
    if (!db || (db !== 'mongo' && db !== 'postgres')) {
      throw new AppError(400, 'Database was not provided or is not supported.');
    }
  }
}
