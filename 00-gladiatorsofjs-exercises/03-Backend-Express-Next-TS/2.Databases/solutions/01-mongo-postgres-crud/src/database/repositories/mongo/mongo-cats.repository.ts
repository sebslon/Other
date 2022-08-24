import { CatsRepository } from '../types';

import { ICat } from '../../models/Cat/Cat';

import { MongoCat } from '../../models/Cat/MongoCat';

class MongoCatsRepository implements CatsRepository {
  getAll(): Promise<ICat[]> {
    return MongoCat.find({}).exec();
  }

  getById(id: number | string): Promise<ICat | null> {
    return MongoCat.findById(id).exec();
  }
}

export const mongoCatsRepository = new MongoCatsRepository();
