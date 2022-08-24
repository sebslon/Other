import { Request, Response } from 'express';
import { ICat } from '../../database/models/Cat/Cat';
import { MongoCat } from '../../database/models/Cat/MongoCat';
import { AppError } from '../../utils/error';
import { CatsService } from './cats.service';
export class CatsController {
  static getCat(req: Request, res: Response) {}

  static async getCats(
    req: Request<{}, {}, {}, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;

    this.handleDbQueryParam(db);

    const catsService = new CatsService(db);
    const cats = await catsService.getAll();

    res.send(cats);
  }

  static async addCat(
    req: Request<{}, {}, ICat, { db: 'mongo' | 'postgres' }>,
    res: Response
  ) {
    const { db } = req.query;
    const { name, age, colour, sex } = req.body;

    CatsController.handleDbQueryParam(db);

    const catsService = new CatsService(db);
    const cat = await catsService.addCat({ name, age, colour, sex });

    res.send(cat);
  }

  static deleteCat(req: Request, res: Response) {}

  static updateCat(req: Request, res: Response) {}

  // PRIVATE METHODS

  private static handleDbQueryParam(db: string) {
    if (!db || (db !== 'mongo' && db !== 'postgres')) {
      throw new AppError(400, 'Database was not provided or is not supported.');
    }
  }
}
