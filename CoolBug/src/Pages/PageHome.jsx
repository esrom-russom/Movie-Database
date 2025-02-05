import React from "react";
import "./PageHome.css";
import { getPopularMovies } from "../utilities/api";
import { useState, useEffect } from "react";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        // console.log(data);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching popular movies", error);
      });
  }, []);
  return <div>PageHome</div>;
}

export default PageHome;
