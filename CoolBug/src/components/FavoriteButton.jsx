import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./FavoriteButton.css";
import React from "react";

function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

  // Determine whether the movie is already in favorites
  const isFavorite = favorites.find((fav) => {
    return fav.id === movie.id;
  });

  function handleClick(event) {
    event.stopPropagation();
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <button onClick={handleClick}>
      {isFavorite ? "💘" : "Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;
