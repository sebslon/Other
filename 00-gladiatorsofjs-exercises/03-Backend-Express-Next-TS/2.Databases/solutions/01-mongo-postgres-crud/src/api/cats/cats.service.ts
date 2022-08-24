import { CatsRepository } from '../../database/repositories/types';

import { mongoCatsRepository } from '../../database/repositories/mongo/mongo-cats.repository';
import { postgresCatsRepository } from '../../database/repositories/postgres/postgres-cats.repository';

import { ICat } from '../../database/models/Cat/Cat';

export class CatsService {
  private catsRepository: CatsRepository;

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

  async addCat(data: ICat): Promise<ICat> {
    const cat = await this.catsRepository.addCat(data);

    return cat;
  }
}

// export const mongoCatsService = new CatsService(mongoCatsRepository);
// export const postgreCatsService = new CatsService(postgresCatsRepository);
