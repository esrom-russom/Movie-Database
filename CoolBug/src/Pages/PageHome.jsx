import React from "react";
import "./PageHome.css";
import {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "../utilities/api";
import Movies from "../components/Movies";
import SimpleSlider from "../components/SimpleSlider";

function PageHome() {
  return (
    <div>
      <h1>Home Page</h1>
      <SimpleSlider />
      <Movies title="Popular Movies" fetchMovies={getPopularMovies} />
      <Movies title="Upcoming Movies" fetchMovies={getUpcomingMovies} />
      <Movies title="Top Rated Movies" fetchMovies={getTopRatedMovies} />
      <Movies title="Now Playing Movies" fetchMovies={getNowPlayingMovies} />
    </div>
  );
}

export default PageHome;
