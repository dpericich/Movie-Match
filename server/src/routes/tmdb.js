import express from 'express';
import { tmdbTopMovies, tmdbGenreList, tmdbMovieObject, tmdbGenreMovies } from '../controllers/tmdb';
const tmdbRouter = express.Router();

tmdbRouter.get('/top-movies', tmdbTopMovies);
tmdbRouter.get('/genres', tmdbGenreList);
tmdbRouter.get('/movie/:movieId', tmdbMovieObject);
tmdbRouter.get('/genres/:genreName/:page?', tmdbGenreMovies);

export default tmdbRouter;