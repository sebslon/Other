import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('cats').del();
  await knex('cats').insert([
    {
      id: 1,
      name: 'Kittie',
      sex: 'Felicia',
      colour: 'brown',
      age: 12,
    },
    {
      id: 2,
      name: 'Kat',
      sex: 'Felix',
      colour: 'blue',
      age: 2,
    },
    {
      id: 3,
      name: 'Fattie',
      sex: 'Felicia',
      colour: 'red',
      age: 4,
    },
  ]);
}
