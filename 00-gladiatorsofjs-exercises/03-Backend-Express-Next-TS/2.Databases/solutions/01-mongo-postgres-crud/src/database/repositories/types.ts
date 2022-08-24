import { IRepository } from '../../types/repository';

import { ICat } from '../models/Cat/Cat';

export abstract class CatsRepository implements IRepository<ICat> {
  abstract getAll(): Promise<ICat[]>;
  abstract getById(id: number | string): Promise<ICat | null>;
  abstract addCat(data: ICat): Promise<ICat>;
}
