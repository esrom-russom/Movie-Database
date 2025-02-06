import "./MoviesCard.css";
import { IMG_URL } from "../globals/globals";
import { formatReleaseDate, formatRating } from "../utilities/toolbelt";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
// {
//     "adult": false,
//     "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
//     "genre_ids": [
//         28,
//         878,
//         35,
//         10751
//     ],
//     "id": 939243,
//     "original_language": "en",
//     "original_title": "Sonic the Hedgehog 3",
//     "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
//     "popularity": 4272.607,
//     "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
//     "release_date": "2024-12-19",
//     "title": "Sonic the Hedgehog 3",
//     "video": false,
//     "vote_average": 7.811,
//     "vote_count": 1476
// }
function MoviesCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="movie-card">
      <img alt={movie.title} src={`${IMG_URL}w342${movie.poster_path}`} />
      <div className="backdrop">
        <div className="title-and-release">
          <h2>{movie.title}</h2>
          <p>{formatReleaseDate(movie.release_date)}</p>
        </div>
        <div className="rating-and-favorite">
          <h2>{formatRating(movie.vote_average)}</h2>
          <FavoriteButton movie={movie} />
          <button>☆</button>
        </div>
      </div>
    </div>
  );
}
export default MoviesCard;
