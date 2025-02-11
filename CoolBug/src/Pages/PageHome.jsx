import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../utilities/api";
import MovieDisplay from "../components/MovieDisplay";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setPopularMovies(data.results))
      .catch((error) => alert("Error fetching popular movies", error));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <MovieDisplay movies={popularMovies} />
    </div>
  );
}

export default PageHome;
