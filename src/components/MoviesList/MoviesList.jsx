import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { List, MovieItem, Poster } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
   
    function createUrl(location, movie) {
        let urlPath

        if (location.pathname !== '/movies') {
            urlPath = `/movies/${movie.id}`
        } else {
            urlPath = `${movie.id}`
        }
        
        return urlPath
        
    }

    return (
        <List>
            {movies.map(movie => {
                const movieUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                return <MovieItem key={movie.id}>
                    <Link to={createUrl(location, movie)} state={{ from: location }}>
                        <Poster src={movieUrl}/>
                        {movie.title}
                    </Link></MovieItem>
            })}
                
            </List>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
}