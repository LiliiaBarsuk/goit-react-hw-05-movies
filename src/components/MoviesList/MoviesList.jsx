import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

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
        <ul>
            {movies.map(movie => {
                return <li key={movie.id}><Link to={createUrl(location, movie)} state={{ from: location }}>{movie.title}</Link></li>
            })}
                
            </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
}