import React from "react";
import "./PageHome.css";
import {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "../utilities/api";
import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-home">
      <div className="slider-container">
        {/* hey randy this is was the fetching problems i was having without the slider it was working fine but 
        once i got the slider function working it somehow started feching it more than once- just wanna give you a heads up*/}
        <Slider key={windowWidth}>
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
