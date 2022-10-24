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
                console.log(reviews);
            } catch(error) {
                console.log(error);
            }
        }

        fetchReviews(movieId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId])

    return (
        <ul>
            {reviews.map(review => {
                return (
                <li>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>)
            })}
            
        </ul>
    )
}