import { fetchListByQuery } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
    const [moviesArray, setMoviesArray] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams('');

    useEffect(() => {
       async function fetchMoviesList (value) {
           const moviesArray = await fetchListByQuery(value);
           
           setMoviesArray([...moviesArray]);
       }
       if (searchValue !== '') {
            fetchMoviesList(searchValue)
       }
    
    }, [searchValue])

    const saveSearchValue = (value) => {
        if(value === '') {
            return
        }

        setSearchValue(value);
        setSearchParams({ query: value })

    };
    
    return (
        <>
        <SearchForm onSubmit={saveSearchValue}/>
        <MoviesList movies={moviesArray}/>
        
        </>
    )
}