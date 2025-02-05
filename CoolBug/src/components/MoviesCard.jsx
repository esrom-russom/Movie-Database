import "./MoviesCard.css";
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
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}
export default MoviesCard;
