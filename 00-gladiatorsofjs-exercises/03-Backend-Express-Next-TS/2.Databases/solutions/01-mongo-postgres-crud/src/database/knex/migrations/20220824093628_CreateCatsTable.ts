import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cats', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('sex').notNullable();
    table.string('colour').notNullable();
    table.integer('age').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cats');
}
