import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FavoriteIcon from "../assets/favorite.svg"; // Outlined heart icon

function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);
  const [hover, setHover] = useState(false);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  function handleClick(event) {
    event.stopPropagation();
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <button
      className={`favorite-button ${isFavorite ? "favorited" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Show "Remove Favorite" text when the movie is favorited and hovered */}
      {isFavorite && hover ? (
        <span className="favorite-text">Remove Favorite</span>
      ) : (
        <img src={FavoriteIcon} alt="Favorite" className="favorite-icon" />
      )}
    </button>
  );
}

export default FavoriteButton;
