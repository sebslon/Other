require('dotenv').config({ path: '../../../.env' });

import type { Knex } from 'knex';

const config: Knex.Config = {
  client: 'postgresql',
  connection: {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DBNAME,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

module.exports = config;
