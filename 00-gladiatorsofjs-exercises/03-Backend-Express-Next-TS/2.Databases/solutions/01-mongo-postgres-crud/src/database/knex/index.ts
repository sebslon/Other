const knexConfig = require('./knexfile');

export function initKnex() {
  const knex = require('knex')(knexConfig);

  return knex;
}

export const knex = initKnex();
