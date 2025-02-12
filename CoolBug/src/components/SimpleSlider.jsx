import React from "react";
import Slider from "react-slick";
import Movies from "./Movies";
import { getUpcomingMovies } from "../utilities/api";
import "./SimpleSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="simple-slider-container">
      <h2>Featured Movies</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Movies fetchMovies={getUpcomingMovies} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
