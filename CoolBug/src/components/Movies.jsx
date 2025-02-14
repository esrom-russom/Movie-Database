import "./Movies.css";
import MovieSlider from "./MovieSlider"; // Import the slider component
function Movies({ title, movies }) {
  return (
    <div className="movies">
      <h1>{title}</h1>
      {/* Use MovieSlider to display movies inside a slider */}
      <MovieSlider movies={movies} />
    </div>
  );
}
export default Movies;
