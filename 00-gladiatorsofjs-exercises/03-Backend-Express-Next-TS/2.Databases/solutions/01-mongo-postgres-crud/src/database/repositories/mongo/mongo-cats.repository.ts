import { CatsRepository } from '../types';

import { ICat } from '../../models/Cat/Cat';

import { MongoCat } from '../../models/Cat/MongoCat';

export class MongoCatsRepository implements CatsRepository {
  getAll(): Promise<ICat[]> {
    return MongoCat.find({}).exec();
  }

  getById(id: number | string): Promise<ICat | null> {
    return MongoCat.findById(id).exec();
  }

  addCat(data: ICat): Promise<ICat> {
    const cat = new MongoCat(data);

    return cat.save();
  }

  deleteById(id: string | number): Promise<ICat | null> {
    return MongoCat.findByIdAndDelete(id).then((doc) => doc);
  }

  deleteByCommonID(id: string): Promise<ICat | null> {
    return MongoCat.findOneAndDelete({ commonID: id }).then((doc) => doc);
  }

  updateById(id: string | number, data: ICat): Promise<ICat | null> {
    return MongoCat.findByIdAndUpdate(id, data, { new: true }).then(
      (doc) => doc
    );
  }

  updateByCommonID(commonId: string, data: ICat): Promise<ICat | null> {
    return MongoCat.findOneAndUpdate({ common_id: commonId }, data, {
      new: true,
    }).then((doc) => doc);
  }
}

export const mongoCatsRepository = new MongoCatsRepository();
