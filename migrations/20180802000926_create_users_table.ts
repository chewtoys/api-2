import Knex from 'knex';

import { timestamps } from './helpers';

const usersTableName = 'users';

const usernameColumnName = 'username';
const usernameIdentifierColumnName = 'usernameIdentifier';

export async function up(knex: Knex): Promise<void> {
  await createUsersTable(knex);
}

async function createUsersTable(knex: Knex): Promise<void> {
  await knex.schema.createTable(usersTableName, table => {
    table
      .increments('id')
      .unsigned()
      .primary();

    table.string(usernameColumnName, 64).notNullable();
    table.string(usernameIdentifierColumnName, 8).notNullable();

    table
      .string('email', 256)
      .notNullable()
      .unique();

    table.string('unverifiedEmail', 256).nullable();

    table.string('firstName', 64).nullable();
    table.string('lastName', 64).nullable();

    table.string('bio', 512).nullable();
    table.string('avatarUrl', 128).nullable();

    table.unique([usernameColumnName, usernameIdentifierColumnName]);

    timestamps({ knex, table });
  });
}

export async function down(knex: Knex): Promise<void> {
  await dropUsersTable(knex);
}

async function dropUsersTable(knex: Knex): Promise<void> {
  await knex.schema.dropTable(usersTableName);
}
