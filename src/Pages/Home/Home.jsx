import { fetchTrendingToday } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect } from "react";
import { useState } from "react"
import { Container } from "./Home/Home.styled";

const Home = () => {

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
          <Container>
            <h2>Trending today</h2>
            <MoviesList movies={movies}/>
          </Container>
        </main>
    )
}

export default Home