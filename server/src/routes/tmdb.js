import express from 'express';
import { tmdbTopMovies } from '../controllers/tmdb';
const tmdbRouter = express.Router();

tmdbRouter.get('/top-movies', tmdbTopMovies);

export default tmdbRouter;