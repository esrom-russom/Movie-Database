
const API_KEY = import.meta.env.VITE_COOL_BUG;
const BASE_URL = "https://api.themoviedb.org/3";


function getMovieById(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((movie) => {
            console.log("Fetched movie data:", movie);  // Debugging log
            console.log("Credits data:", movie.credits); // Check if credits exist
            return movie;
        })
        .catch((error) => {
            console.error("Error fetching movie by ID:", error);
            throw error;
        });
}

export { getMovieById };
// confi info 
// "images": {
//     "base_url": "http://image.tmdb.org/t/p/",
//     "secure_base_url": "https://image.tmdb.org/t/p/",
//     "backdrop_sizes": [
//       "w300",
//       "w780",
//       "w1280",
//       "original"
//     ],
//     "logo_sizes": [
//       "w45",
//       "w92",
//       "w154",
//       "w185",
//       "w300",
//       "w500",
//       "original"
//     ],
//     "poster_sizes": [
//       "w92",
//       "w154",
//       "w185",
//       "w342",
//       "w500",
//       "w780",
//       "original"
//     ],
//     "profile_sizes": [
//       "w45",
//       "w185",
//       "h632",
//       "original"
//     ],
//     "still_sizes": [
//       "w92",
//       "w185",
//       "w300",
//       "original"
//     ]
//   }
// }
// function getMovieImages() {
//     return fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch movie images");
//             }
//             return response.json();
//         })
//         .catch((error) => {
//             console.error("Error fetching movie images", error);
//             throw error;
//         }); 
// }

function getPopularMovies() {
    return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        .then((response) =>  {
            if(!response.ok){
                throw new Error("Failed to fetch popular movies");
            }
            return response.json();
        })
        .catch ((error) => {
            console.error("Error fetching popular movies", error);
            throw error;
        });
}

function getUpcomingMovies() {
    return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
        .then((response) =>  {
            if(!response.ok){
                throw new Error("Failed to fetch upcoming movies");
            }
            return response.json();
        })
        .catch ((error) => {
            console.error("Error fetching upcoming movies", error);
            throw error;
        });
}

function getTopRatedMovies() {
    return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
        .then((response) =>  {
            if(!response.ok){
                throw new Error("Failed to fetch top rated movies");
            }
            return response.json();
        })
        .catch ((error) => {
            console.error("Error fetching top rated movies", error);
            throw error;
        });
}

function getNowPlayingMovies() {
    return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
        .then((response) =>  {
            if(!response.ok){
                throw new Error("Failed to fetch now playing movies");
            }
            return response.json();
        })
        .catch ((error) => {
            console.error("Error fetching now playing movies", error);
            throw error;
        });
}

   


export { getPopularMovies, getUpcomingMovies, getTopRatedMovies, getNowPlayingMovies,};

