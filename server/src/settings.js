import dotenv from 'dotenv';
dotenv.config();
// Use non-name exports for all ENV variables
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const tmdbApiKeyEnvironmentVariable = process.env.TMDB_API_KEY;
export const postgresDatabaseName = process.env.POSTGRES_DB;
export const postgresUser = process.env.POSTGRES_USER;
export const postgresPassword = process.env.POSTGRES_PASSWORD;