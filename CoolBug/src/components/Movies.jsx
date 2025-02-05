import "./Movies.css";
import MoviesCard from "./MoviesCard";

function Movies({ title, movies }) {
  return (
    <div className="movies">
      <h1>{title}</h1>
      {/* where we will map over the movies*/}
      <div className="movies-container">
      {movies.map((movie)=>(
        <MoviesCard key={movie.id} movie={movie} />))}

      </div>
      
    </div>
  );
}

export default Movies;
