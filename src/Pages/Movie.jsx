import { fetchMovieById } from "Api";
import { useEffect, Suspense, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { AdditionalInfo, LinkStyled, MovieContainer, MovieDetails } from "./Movie.styled";


const Movie = () => { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const goBackLink = location.state?.from ?? "/";
    

    useEffect(() => {
        
        async function fetchMovie(id) {
            try {
                
                const movie = await fetchMovieById(id);
                console.log(movie);
               
                setMovie({
                    imgUrl: `https://image.tmdb.org/t/p/w500/${movie['poster_path']}`,
                    rating: Math.floor(movie["vote_average"] * 10),
                    genres: movie.genres.map(genre => genre.name).join(' '),
                    title: movie.title,
                    owerview: movie.overview,
                    year: new Date(movie["release_date"]).getUTCFullYear()
               

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
            <MovieContainer>
            <LinkStyled to={goBackLink}>Go back</LinkStyled>
            <MovieDetails>
                <img src={movie.imgUrl} alt="Movie poster" width='250' height='350' />
                <div>
                    <h2>{movie.title} ({movie.year})</h2>
                    <p>User score: {movie.rating}%</p>
                    <h3>Owerview</h3>
                    <p>{movie.owerview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres}</p>
                </div>
            </MovieDetails>
            
            <AdditionalInfo>
            <p>Additional information</p>
            <ul>
                <li><Link to='cast' state={{ from: goBackLink }}>Cast</Link></li>
                <li><Link to='reviews' state={{ from: goBackLink }}>Reviews</Link></li>
            </ul>
            </AdditionalInfo>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
           </Suspense>
           </MovieContainer>  
        </main>
    )
}

export default Movie