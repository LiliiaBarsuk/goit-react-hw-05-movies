import { fetchReviewsById } from "Api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        async function fetchReviews(id) {
            try {
                
                const reviewsArr = await fetchReviewsById(id);
                
                setReviews([...reviewsArr]);
            } catch(error) {
                console.log(error);
            }
        }

        fetchReviews(movieId)
    }, [movieId])

    return (
        <>
        {reviews.length > 0 ? 
        <ul>
            {reviews.map(review => {
                return (
                <li key ={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>)
            })}    
        </ul> 
        : <p>We don't have any reviews for this movie. You can be first</p>}
        </>
        
    )
}