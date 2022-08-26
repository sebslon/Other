import { IRepository } from '../../types/repository';

import { ICat } from '../models/Cat/Cat';

export abstract class CatsRepository implements IRepository<ICat> {
  abstract getAll(): Promise<ICat[]>;
  abstract getById(id: number | string): Promise<ICat | null>;
  abstract addCat(data: Partial<ICat>): Promise<ICat>;
  abstract deleteById(id: number | string): Promise<ICat | null>;
  abstract deleteByCommonID(id: string): Promise<ICat | null>;
  abstract updateById(
    id: number | string,
    data: Partial<ICat>
  ): Promise<ICat | null>;
  abstract updateByCommonID(
    commonId: string,
    data: Partial<ICat>
  ): Promise<ICat | null>;
}
