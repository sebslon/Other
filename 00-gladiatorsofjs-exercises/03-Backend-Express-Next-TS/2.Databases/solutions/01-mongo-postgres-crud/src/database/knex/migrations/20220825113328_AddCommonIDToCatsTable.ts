import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('cats', (table) => {
    table.string('common_id').defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('cats', (table) => {
    table.dropColumn('common_id');
  });
}
