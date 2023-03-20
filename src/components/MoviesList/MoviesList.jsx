import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { LinkStyled, List, MovieItem, Poster } from "./MoviesList.styled";
import PosterImg from '../../images/poster.png';

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

                const movieUrl = movie.poster_path != null ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : PosterImg;
                return <MovieItem key={movie.id}>
                    <LinkStyled to={createUrl(location, movie)} state={{ from: location }}>
                        <Poster src={movieUrl}/>
                        {movie.title}
                    </LinkStyled></MovieItem>
            })}
                
            </List>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
}