import React from "react";
import "./PageHome.css";
import {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "../utilities/api";
import { useState, useEffect } from "react";
import Movies from "../components/Movies"; // Adjust the path as necessary
import SimpleSlider from "../components/SimpleSlider"; // Adjust the path as necessary
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { use } from "react";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setPopularMovies(data.results))
      .catch((error) => alert("Error fetching popular movies", error));
  }, []);

  useEffect(() => {
    getUpcomingMovies()
      .then((data) => {
        console.log(data);
        setUpcomingMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching Upcoming movies", error);
      });
  }, []);

  useEffect(() => {
    getTopRatedMovies()
      .then((data) => {
        console.log(data);
        setTopRatedMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching Top Rated movies", error);
      });
  }, []);

  useEffect(() => {
    getNowPlayingMovies()
      .then((data) => {
        console.log(data);
        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching Now Playing movies", error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {/* <h2>Popular Movies</h2> */}
      <SimpleSlider movies={popularMovies} />
      <Movies title="Popular Movies" movies={popularMovies} />
      <Movies title="Upcoming Movies" movies={upcomingMovies} />
      {/* <h2>Top Rated Movies</h2> */}
      <Movies title="Top Rated Movies" movies={topRatedMovies} />
      {/* <h2>Now Playing Movies</h2> */}
      <Movies title="Now Playing Movies" movies={nowPlayingMovies} />
    </div>
  );
}

export default PageHome;
