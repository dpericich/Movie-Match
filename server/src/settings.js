import dotenv from 'dotenv';
dotenv.config();
// Use non-name exports for all ENV variables
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const tmdbApiKeyEnvironmentVariable = process.env.TMDB_API_KEY;