import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { useState, useEffect } from "react";
import "./PageMovie.css";

function PageMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id)
      .then((movie) => {
        console.log("Movie data:", movie);
        console.log("Cast data:", movie.credits?.cast);
        setMovie(movie);
      })
      .catch((error) => {
        console.error("Error details:", error);
      });
  }, [id]);

  if (!movie) {
    return (
      <div className="page-movie loading">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const backdropPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const trailer =
    movie.videos?.results?.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    ) || movie.videos?.results?.[0];

  const cast = movie.credits?.cast?.slice(0, 10) || [];

  const generateStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="star full">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="star half">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star empty">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="page-movie">
      <div
        className="movie-banner"
        style={{ backgroundImage: `url(${backdropPath})` }}
      >
        <div className="banner-overlay">
          <div className="movie-header">
            <h1>{movie.title}</h1>
            <div className="movie-meta">
              <span className="release-date">
                {new Date(movie.release_date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-content">
        <div className="movie-poster">
          <img src={posterPath} alt={`${movie.title} poster`} />
        </div>

        <div className="movie-details">
          <div className="overview">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="rating-container">
            <div className="star-rating">
              {generateStarRating(movie.vote_average)}
            </div>
            <span className="rating-number">
              {movie.vote_average.toFixed(1)}/10
            </span>
            <span className="vote-count">
              ({movie.vote_count.toLocaleString()} votes)
            </span>
          </div>
          <div className="additional-info">
            <div className="info-item">
              <span className="info-label">Status:</span>
              <span className="info-value">{movie.status}</span>
            </div>
            {movie.runtime > 0 && (
              <div className="info-item">
                <span className="info-label">Runtime:</span>
                <span className="info-value">{movie.runtime} minutes</span>
              </div>
            )}
            {movie.genres?.length > 0 && (
              <div className="info-item">
                <span className="info-label">Genres:</span>
                <span className="info-value">
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </div>
            )}
          </div>

          {cast.length > 0 && (
            <div className="cast-section">
              <h2>Top Cast</h2>
              <div className="cast-list">
                {cast.map((actor) => (
                  <div key={actor.id} className="cast-member">
                    <div className="actor-image">
                      {actor.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                          alt={actor.name}
                        />
                      ) : (
                        <div className="actor-placeholder">
                          <span>{actor.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="actor-info">
                      <div className="actor-name">{actor.name}</div>
                      <div className="actor-character">{actor.character}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageMovie;
