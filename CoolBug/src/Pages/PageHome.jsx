import React from "react";
import "./PageHome.css";
import { getPopularMovies } from "../utilities/api";
import { useState, useEffect } from "react";
import Movies from "../components/Movies"; // Adjust the path as necessary

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching popular movies", error);
      });
  }, []);
  return (
    <div>
      {/* <Movies title="Popular Movies" movies={popularMovies} /> */}
      <Movies title="Popular Movies" movies={popularMovies} />
    </div>
  );
}

export default PageHome;
