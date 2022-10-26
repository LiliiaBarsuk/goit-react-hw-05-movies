import { fetchListByQuery } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Container } from "./Home/Home.styled";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams.get('query');
    const [searchValue, setSearchValue] = useState(query ? query : '');
    const [moviesArray, setMoviesArray] = useState([]);
    useEffect(() => {
       async function fetchMoviesList (value) {
        try {
            const moviesArray = await fetchListByQuery(value);
            setMoviesArray([...moviesArray]);
        } catch(error) {
            console.log(error);
        }
           
       }
    
       if (searchValue === '') {
          return  
       }
       fetchMoviesList(searchValue)
    
    }, [searchValue])

    const saveSearchValue = (value) => {
        if(value === '') {
            return
        }

        setSearchValue(value);
        setSearchParams({ query: value })

    };
    
    return (
        <main>
        <Container>
        <SearchForm onSubmit={saveSearchValue}/>
        <MoviesList movies={moviesArray}/>        
        </Container>
        </main>
    )
}

export default Movies;