import { fetchMovieById } from "Api";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";


export const Movie = () => { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();

    useEffect(() => {
        
        async function fetchMovie(id) {
            try {
                
                const movie = await fetchMovieById(id);
               
                setMovie({
                    imgUrl: `https://image.tmdb.org/t/p/w500/${movie['poster_path']}`,
                    rating: Math.floor(movie["vote_average"] * 10),
                    genres: movie.genres.map(genre => genre.name).join(' '),
                    title: movie.title,
                    owerview: movie.owerview,
                    year: movie["release_date"].slice(0, 4)

                });
                
            } catch(error) {
                console.log(error);
            }
        }

        fetchMovie(movieId)

    }, [movieId]

    )

    return (
       
        <main>
            <Link to={location.state?.from ?? "/movies"}>icon Go back</Link>
            <div>
                <img src={movie.imgUrl} alt="" />
                <h2>{movie.title} ({movie.year})</h2>
                <p>User score: {movie.rating}%</p>
                <h3>Owerview</h3>
                <p>{movie.owerview}</p>
                <h3>Genres</h3>
                <p>{movie.genres}</p>
            </div>
        
            <p>Additional information</p>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet />
        </main>
    )
}