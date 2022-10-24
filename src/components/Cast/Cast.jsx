import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "Api";

export const Cast = () => {
    const [actorsList, setActorsList] = useState([]);
    const { movieId } = useParams();
    

    useEffect(() => {
        async function fetchCast(id) {
            try {   
                const actors = await fetchCastById(id);
                setActorsList([...actors]);               
            } catch(error) {
                console.log(error);
            }
        }
   

           fetchCast(movieId) 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]
    )

    return (
        <ul>
            {actorsList.map(actor => {
                return (
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor["profile_path"]}`} alt="" />
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </li> 
                )
            })}
            
        </ul>
    )
}