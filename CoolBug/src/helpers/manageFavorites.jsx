export const manageFavorites = (movieId, action) => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (action === "add") {
    if (!storedFavorites.includes(movieId)) {
      storedFavorites.push(movieId);
    }
  } else if (action === "remove") {
    const index = storedFavorites.indexOf(movieId);
    if (index > -1) {
      storedFavorites.splice(index, 1);
    }
  }

  localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  return storedFavorites;
};
