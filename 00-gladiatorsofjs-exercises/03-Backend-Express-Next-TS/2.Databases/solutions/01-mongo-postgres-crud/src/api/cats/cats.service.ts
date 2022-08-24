import { CatsRepository } from '../../database/repositories/types';

import { mongoCatsRepository } from '../../database/repositories/mongo/mongo-cats.repository';
import { postgresCatsRepository } from '../../database/repositories/postgres/postgres-cats.repository';

import { ICat } from '../../database/models/Cat/Cat';

export class CatsService {
  private catsRepository: CatsRepository;

  constructor(repository: CatsRepository) {
    this.catsRepository = repository;
  }

  async getAll(): Promise<ICat[]> {
    const cats = await this.catsRepository.getAll();

    return cats;
  }
}

export const mongoCatsService = new CatsService(mongoCatsRepository);
export const postgreCatsService = new CatsService(postgresCatsRepository);
