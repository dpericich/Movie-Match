import { tmbdApiKeyEnvironmentVariable } from '../settings';
// Need to figure out how to cache my calls to TMDB
// Only should call index / each category page once per 24 hour period -> no more than every 12 hours
// Maybe I make the call and cache it on a schedule and don't even have it as triggered by users
export const tmdbTopMovies = async (req, res) => {
    // Change this to the top ten moviese
    const tmdbData = await getData(`https://api.themoviedb.org/3/movie/550?api_key=${tmbdApiKeyEnvironmentVariable}`);
    res.status(200).json({ data: tmdbData });
};

export const tmdbCategoryObject = async (req, res) => {}

export const tmdbMovieObject = async (req, res) => {}

// What are some of the other the routes I will need for this?
// 1) Get all movies
// 2) Get movie with a category_id
// 3) Get most recent releases
// ... what else?

// For performance do I want to paginate the results / available options?
