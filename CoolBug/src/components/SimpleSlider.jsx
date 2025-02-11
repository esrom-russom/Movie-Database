import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getUpcomingMovies } from "../utilities/api";

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
          <div>{/* <h3>{getUpcomingMovies}</h3> */}</div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default SimpleSlider;
