import { CatsRepository } from '../../database/repositories/types';

import {
  MongoCatsRepository,
  mongoCatsRepository,
} from '../../database/repositories/mongo/mongo-cats.repository';
import {
  PostgresCatsRepository,
  postgresCatsRepository,
} from '../../database/repositories/postgres/postgres-cats.repository';

import { ICat } from '../../database/models/Cat/Cat';

import { AppError } from '../../utils/error';

export class CatsService {
  public catsRepository: CatsRepository;

  //---- DEPENDENCY INJECTION ----//
  // constructor(repository: CatsRepository) {
  //   this.catsRepository = repository;
  // }

  //---- STRATEGY PATTERN ----//
  constructor(database: 'mongo' | 'postgres') {
    if (database === 'mongo') {
      this.catsRepository = mongoCatsRepository;
    } else if (database === 'postgres') {
      this.catsRepository = postgresCatsRepository;
    } else {
      throw new Error("Database wasn't provided to service [1].");
    }
  }

  async getAll(): Promise<ICat[]> {
    const cats = await this.catsRepository.getAll();

    return cats;
  }

  async addCat(data: Omit<ICat, 'id'>): Promise<ICat> {
    const cat = await this.catsRepository.addCat(data);

    return cat;
  }

  async getCatById(id: number | string): Promise<ICat | null> {
    const cat = await this.catsRepository.getById(id);

    return cat;
  }

  async deleteCat(id: number | string): Promise<void> {
    const cat = await this.catsRepository.deleteById(id);

    if (!cat) throw new AppError(400, 'Cat not found!');
  }

  async updateCat(id: number | string, data: Partial<ICat>): Promise<ICat> {
    const cat = await this.catsRepository.updateById(id, data);

    if (!cat) throw new AppError(400, 'Cat not found!');

    return cat;
  }

  async updateCatByCommonId(
    commonId: string,
    data: Partial<ICat>
  ): Promise<ICat | null> {
    const cat = await this.catsRepository.updateByCommonID(commonId, data);

    return cat;
  }

  async deleteCatByCommonId(commonId: string): Promise<void> {
    const cat = await this.catsRepository.deleteByCommonID(commonId);

    if (!cat) throw new AppError(400, 'Cat not found!');
  }

  switchDatabase() {
    if (this.catsRepository instanceof MongoCatsRepository) {
      this.catsRepository = postgresCatsRepository;
    } else if (this.catsRepository instanceof PostgresCatsRepository) {
      this.catsRepository = mongoCatsRepository;
    }
  }
}

// export const mongoCatsService = new CatsService(mongoCatsRepository);
// export const postgreCatsService = new CatsService(postgresCatsRepository);
