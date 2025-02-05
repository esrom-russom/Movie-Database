
const API_KEY = import.meta.env.VITE_COOL_BUG;

const BASE_URL = "https://api.themoviedb.org/3";


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


export { getPopularMovies };