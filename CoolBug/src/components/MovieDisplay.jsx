import React, { useState } from "react";
import { manageFavorites } from "../helpers/manageFavorites";
import "./MovieDisplay.css";

const MovieDisplay = ({ movies, isFavoritePage = false }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleFavoriteClick = (movieId) => {
    const updatedFavorites = manageFavorites(
      movieId,
      favoriteMovies.includes(movieId) ? "remove" : "add"
    );
    setFavoriteMovies(updatedFavorites);
  };

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <button onClick={() => handleFavoriteClick(movie.id)}>
            {favoriteMovies.includes(movie.id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieDisplay;
