import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

  const isFavorite = favorites.find((fav) => fav.id === movie.id);

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
      {isFavorite ? "Remove Favorite" : "💘"}
    </button>
  );
}

export default FavoriteButton;
