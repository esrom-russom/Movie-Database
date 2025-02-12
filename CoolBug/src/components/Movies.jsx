import React, { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import "./Movies.css";

function Movies({ title, fetchMovies }) {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchMovies]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="movies">
      <h1>{title}</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
