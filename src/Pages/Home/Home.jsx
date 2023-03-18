import { fetchTrendingToday } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { useEffect } from "react";
import { useState } from "react"
import { Container, Title } from "./Home.styled.jsx";

const Home = () => {

    const [movies, setMovies] = useState([]);
    console.log(movies);
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
            <Title>Trending today</Title>
            <MoviesList movies={movies}/>
          </Container>
        </main>
    )
}

export default Home