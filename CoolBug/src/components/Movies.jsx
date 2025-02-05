import "./Movies.css";

function Movies({ title, movies }) {
  return (
    <div className="movies">
      <h1>{title}</h1>
      {/* where we will map over the movies*/}
    </div>
  );
}

export default Movies;
