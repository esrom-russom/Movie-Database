import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSlider.css"; // Make sure to create this file for styling
import MoviesCard from "./MoviesCard";

const MovieSlider = ({ title, movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust as needed
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
    ],
  };

  return (
    <div className="movie-slider">
      <h3>{title}</h3>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="slide-item">
            <MoviesCard movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
