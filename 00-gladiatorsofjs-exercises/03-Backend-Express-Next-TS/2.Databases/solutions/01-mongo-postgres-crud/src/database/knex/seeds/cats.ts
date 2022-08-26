import { Knex } from 'knex';
import { MongoCat } from '../../models/Cat/MongoCat';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  const cat1 = await MongoCat.create({
    name: 'Kittie',
    sex: 'Felicia',
    colour: 'brown',
    age: 12,
    postgresID: 1,
  });

  const cat2 = await MongoCat.create({
    name: 'Kat',
    sex: 'Felix',
    colour: 'blue',
    age: 2,
    postgresID: 2,
  });

  const cat3 = await MongoCat.create({
    name: 'Fattie',
    sex: 'Felicia',
    colour: 'red',
    age: 4,
    postgresID: 3,
  });

  await knex('cats').del();

  // Inserts seed entries
  await knex('cats').insert([
    {
      id: 1,
      name: 'Kittie',
      sex: 'Felicia',
      colour: 'brown',
      age: 12,
      mongoID: cat1.id,
    },
    {
      id: 2,
      name: 'Kat',
      sex: 'Felix',
      colour: 'blue',
      age: 2,
      mongoID: cat2.id,
    },
    {
      id: 3,
      name: 'Fattie',
      sex: 'Felicia',
      colour: 'red',
      age: 4,
      mongoID: cat3.id,
    },
  ]);
}
