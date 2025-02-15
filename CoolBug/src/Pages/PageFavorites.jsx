import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MoviesCard from "../components/MoviesCard";
import "./PageFavorites.css";

function PageFavorites() {
  const { favorites } = useContext(GlobalContext);
  return (
    <div className="page-favorites">
      <h1>Favorites</h1>
      <p className="favorites-count">
        You have {favorites.length}{" "}
        {favorites.length === 1 ? "favorite" : "favorites"}.
      </p>

      <div className="favorites-grid-wrapper">
        <div className="favorites-grid">
          {favorites.length === 0 ? (
            <div className="no-favorites">No favorites yet.</div>
          ) : (
            favorites.map((movie) =>
              movie.id ? <MoviesCard key={movie.id} movie={movie} /> : null
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default PageFavorites;
