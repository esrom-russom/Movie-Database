import React from "react";
import "./PageMovie.css";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { useState, useEffect } from "react";

function PageMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id)
      .then((movie) => {
        console.log(movie);
        setMovie(movie);
      })
      .catch((error) => {
        alert("Error fetching movie by Id");
      });
  }, [id]);

  return (
    <div className="page-movie">
      <div>PageMovie</div>
      {/* Add your favorite movies here */}
    </div>
  );
}

export default PageMovie;
