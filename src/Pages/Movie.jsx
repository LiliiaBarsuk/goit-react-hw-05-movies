import { fetchMovieById } from "Api";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";



export const Movie = () => { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        
        async function fetchMovie(id) {
            try {
                
                const movie = await fetchMovieById(id);
                setMovie(movie);
                
            } catch(error) {
                console.log(error);
            }
        }

        fetchMovie(movieId)

    }, [movieId]

    )
    
    const imgUrl = `https://image.tmdb.org/t/p/w500/${movie['poster_path']}`;
    const rating = Math.floor(movie["vote_average"] * 10);
    const genres = movie.genres.map(genre => genre.name).join(' ');

    return (
       
        <>
            <button type="button">icon Go back</button>
            <div>
                <img src={imgUrl} alt="" />
                <h2>{movie.title}</h2>
                <p>User score: {rating}%</p>
                <h3>Owerview</h3>
                <p>{movie.owerview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
            </div>
        
            <p>Additional information</p>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet />
        </>
    )
}