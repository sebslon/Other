import { knex } from '../../knex';
import { CatsRepository } from '../types';

import { ICat } from '../../models/Cat/Cat';

// Knex Postgres Cats Repository
class PostgresCatsRepository implements CatsRepository {
  getAll(): Promise<ICat[]> {
    return knex({}).select('*').from('cats');
  }

  getById(id: number | string): Promise<ICat | null> {
    return knex({}).select('*').from('cats').where({ id }).first();
  }
}

export const postgresCatsRepository = new PostgresCatsRepository();
