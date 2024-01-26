// Need to figure out what to do with this client
// https://node-postgres.com/apis/client
// https://node-postgres.com/guides/project-structure

// import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;
import { postgresUser, postgresPassword, postgresDatabaseName } from '../settings.js';

const pool = new Pool({
    user: postgresUser,
    database: postgresDatabaseName,
    password: postgresPassword,
    port: 5450
});

export const query = (text, params, callback) => {
    return pool.query(text, params, callback);
}