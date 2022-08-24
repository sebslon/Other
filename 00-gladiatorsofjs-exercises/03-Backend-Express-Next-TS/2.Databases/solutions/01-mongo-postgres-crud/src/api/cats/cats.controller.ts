import { Request, Response } from 'express';
import { ICat } from '../../database/models/Cat/Cat';
import { MongoCat } from '../../database/models/Cat/MongoCat';
import { mongoCatsService, postgreCatsService } from './cats.service';
export class CatsController {
  static getCat(req: Request, res: Response) {}

  static async getCats(req: Request, res: Response) {
    const { db } = req.query;

    if (!db) return res.status(400).send('Database was not provided.');

    let cats: ICat[] = [];

    if (db === 'mongo') cats = await mongoCatsService.getAll();
    else if (db === 'postgres') cats = await postgreCatsService.getAll();

    res.send(cats);
  }

  static async addCat(req: Request, res: Response) {
    const { db } = req.query;
    const { name, age, colour } = req.body;

    if (db === 'mongo') {
      const cat = await MongoCat.create({ name, age, colour });

      res.send(cat);
    }
  }

  static deleteCat(req: Request, res: Response) {}

  static updateCat(req: Request, res: Response) {}
}
