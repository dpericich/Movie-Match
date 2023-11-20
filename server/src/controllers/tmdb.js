import { tmdbApiKeyEnvironmentVariable } from '../settings';
// Need to figure out how to cache my calls to TMDB
// Only should call index / each category page once per 24 hour period -> no more than every 12 hours
// Maybe I make the call and cache it on a schedule and don't even have it as triggered by users

export const tmdbTopMovies = async (req, res) => {
    const requestedPage = req.params["page"] || 1
    const {page, results} = await getData(`https://api.themoviedb.org/3/movie/top_rated?page=${requestedPage}&api_key=${tmdbApiKeyEnvironmentVariable}`);
    const serializedMovieRecords = serializeMovieCollection(results)
    res.status(200).json({ data: serializedMovieRecords, page: page});
};

export const tmdbGenreList = async (req, res) => {
    const genres = await getData(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${tmdbApiKeyEnvironmentVariable}`);
    res.status(200).json({ data: genres });
}

export const tmdbGenreMovies = async (req,res) => {
    const requestedPage = req.params["page"] || 1;
    const genreName = req.params["genreName"];
    const {page, results} = await getData(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreName}&page=${requestedPage}&api_key=${tmdbApiKeyEnvironmentVariable}`);
    const serializedMovieCollection = serializeMovieCollection(results);
    res.status(200).json({ data: serializedMovieCollection, page: page });
}

export const tmdbMovieObject = async (req, res) => {
    const movieId = req.params["movieId"];
    const movieData = await getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKeyEnvironmentVariable}`);
    const serializedMovieRecord = serializeMovieRecord(movieData);
    res.status(200).json({ data: serializedMovieRecord });
}

// What are some of the other the routes I will need for this?
// 1) Get all movies
// 2) Get movie with a category_id
// 3) Get most recent releases
// ... what else?

// For performance do I want to paginate the results / available options?

// Helper Methods //

// Need to move this to a separate file
const serializeMovieRecord = (data) => {
    return {
        title: data["original_title"],
        overview: data["overview"],
        runtime: data["runtime"],
        releaseDate: data["release_date"],
        posterPath: data["poster_path"],
        movidId: data["id"],
        genreReadable: data["genres"]?.length ?  data["genres"][0]["name"] : "",
        genreId: data["genres"]?.length ? data["genres"][0]["id"] : ""
    }
};

const serializeMovieCollection = (data) => {
    return data.map(record => serializeMovieRecord(record));
}


// CRUD Operations //
// Will want to move this to a data methods file / class
const getData = async (resourcePath, options) => {
    const response = await fetch(resourcePath);
    try {
        if (!response.ok) {
            throw new Error("Error requesting data");
        };

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
        // Will I want to return an error here?
        return { error: error, errorMessage: error.message, status: response.status };
    }
};

const postData = async(resourcePath, body, options) => {};

const putData = async(resourcePath, body, options) => {};

const deleteData = async(resourcePath, body, options) => {};