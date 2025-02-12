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
import MovieSlider from "../components/MovieSlider"; // Adjust the path as necessary
import Slider from "react-slick";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Adjust the path as necessary

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching Popular movies", error);
      });
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
    <div className="page-home">
      <div className="slider-container">
        <Slider>
          <div className="movies-section">
            <Movies title="Popular Movies" movies={popularMovies} />
            <Movies title="Upcoming Movies" movies={upcomingMovies} />
            <Movies title="Top Rated Movies" movies={topRatedMovies} />
            <Movies title="Now Playing Movies" movies={nowPlayingMovies} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default PageHome;
