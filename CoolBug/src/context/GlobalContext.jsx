import React, { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function loadFavsFromLocalStorage() {
    try {
      // Add a try-catch block
      const favs = localStorage.getItem("favorites");
      if (favs) {
        return JSON.parse(favs);
      }
      return; // Return empty array if no favorites in storage
    } catch (error) {
      console.error("Error loading favorites from local storage:", error);
      return; // Return empty array in case of error
    }
  }

  function addFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function removeFavorite(movie) {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
  }

  return (
    <GlobalContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
