import Product from "../Product/Product";
import Shortreview from "../Shortreview/Shortreview";
import "./Home.css";
import useReviews from "../../hooks/useReviews";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  // losding the data

  return (
    <div>
      <Product></Product>
      <h1 className="text-5xl">Reviews</h1>
      <div className="review-container">
        {reviews.slice(0, 3).map((review) => (
          <Shortreview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Home;
