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

  addCat(data: ICat) {
    return knex('cats')
      .insert(data)
      .returning('*')
      .then((rows) => rows[0]);
  }

  deleteById(id: string | number): Promise<ICat | null> {
    return knex('cats').where({ id }).del();
  }

  updateById(id: string | number, data: ICat): Promise<ICat | null> {
    return knex('cats')
      .where({ id })
      .update(data, '*')
      .then((rows) => rows[0]);
  }
}

export const postgresCatsRepository = new PostgresCatsRepository();
