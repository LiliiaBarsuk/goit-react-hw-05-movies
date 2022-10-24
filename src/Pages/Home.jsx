import { fetchTrendingToday } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect } from "react";
import { useState } from "react"

export const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const moviesArray = await fetchTrendingToday();

                setMovies([...moviesArray])
            }
            catch(error) {
                console.log(error);
            }

        };
        fetchMovies()

    }, [])

    return (
        <main>
            <h2>Trending today</h2>
            <MoviesList movies={movies}/>
        </main>
    )
}