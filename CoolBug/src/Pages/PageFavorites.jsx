import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MoviesCard from "../components/MoviesCard";
import "./PageFavorites.css";

function PageFavorites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="page-favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PageFavorites;
