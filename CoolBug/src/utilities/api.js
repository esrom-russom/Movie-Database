// api.js
const API_KEY = import.meta.env.VITE_COOL_BUG;

// Function to get the base URL for movie posters
export const getImageUrl = (path, size = "w500") => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Fetch popular movies
export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
};

// Fetch upcoming movies
export const getUpcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
};

// Fetch top rated movies
export const getTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
};

// Fetch now playing movies
export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
};

// Fetch movie details by ID
export const getMovieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,release_dates`
  );
  return await res.json();
};