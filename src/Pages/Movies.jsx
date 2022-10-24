import { fetchListByQuery } from "Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams.get('query');
    const [searchValue, setSearchValue] = useState(query ? query : '');
    const [moviesArray, setMoviesArray] = useState([]);
    useEffect(() => {
       async function fetchMoviesList (value) {
           const moviesArray = await fetchListByQuery(value);
           
           setMoviesArray([...moviesArray]);
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
        <>
        <SearchForm onSubmit={saveSearchValue}/>
        <MoviesList movies={moviesArray}/>        
        </>
    )
}