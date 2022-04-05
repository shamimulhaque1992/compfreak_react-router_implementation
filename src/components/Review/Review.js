import React from "react";
import Shortreview from "../Shortreview/Shortreview";
import useReviews from "../../hooks/useReviews";

const Review = () => {
    const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1 className="text-2xl text-center">Reviews</h1>
      <div className="review-container">
        {reviews.map((review) => (
          <Shortreview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
