import express from 'express';
import { tmdbTopMovies, tmdbGenreList, tmdbMovieObject, tmdbGenreMovies } from '../controllers/tmdb';
const tmdbRouter = express.Router();

tmdbRouter.get('/top-movies/:page?', tmdbTopMovies);
tmdbRouter.get('/genres', tmdbGenreList);
tmdbRouter.get('/movies/:movieId', tmdbMovieObject);
tmdbRouter.get('/genres/:genreName/:page?', tmdbGenreMovies);

export default tmdbRouter;