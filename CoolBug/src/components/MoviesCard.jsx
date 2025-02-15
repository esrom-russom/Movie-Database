import "./MoviesCard.css";
import { IMG_URL } from "../globals/globals";
import { formatReleaseDate, formatRating } from "../utilities/toolbelt";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { getImageUrl } from "../utilities/api"; // Import the image URL function

function MoviesCard({ movie }) {
  const navigate = useNavigate();
  const imageUrl = movie.poster_path
    ? getImageUrl(movie.poster_path)
    : "/placeholder.jpg"; // Use the helper function and placeholder

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="movie-card">
      <img
        alt={movie.title}
        src={imageUrl}
        onError={(e) => (e.target.src = "/placeholder.jpg")}
      />
      <div className="backdrop">
        <div className="title-and-release">
          <h2>{movie.title}</h2>
          <p>{formatReleaseDate(movie.release_date)}</p>
        </div>
        <div className="rating-and-favorite">
          <h2>{formatRating(movie.vote_average)}</h2>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
