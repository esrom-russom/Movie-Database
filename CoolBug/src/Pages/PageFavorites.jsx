import React, { useState, useEffect } from "react";
import { getMovieById } from "../utilities/api";
import MovieDisplay from "../components/MovieDisplay";

function PageFavorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMovies(storedFavorites);

    const fetchMovieDetails = async () => {
      const promises = storedFavorites.map(async (movieId) => {
        try {
          return await getMovieById(movieId);
        } catch (error) {
          console.error(
            `Error fetching movie details for ID ${movieId}:`,
            error
          );
          return null;
        }
      });

      const results = await Promise.all(promises);
      setMovieDetails(results.filter((movie) => movie !== null));
    };

    if (storedFavorites.length > 0) {
      fetchMovieDetails();
    } else {
      setMovieDetails([]);
    }
  }, []);

  return (
    <div>
      <h1>Favorite Movies</h1>
      {movieDetails.length > 0 ? (
        <MovieDisplay movies={movieDetails} isFavoritePage={true} />
      ) : (
        <p>No favorite movies yet!</p>
      )}
    </div>
  );
}

export default PageFavorites;
