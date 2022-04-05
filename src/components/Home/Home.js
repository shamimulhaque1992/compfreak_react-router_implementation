import Product from "../Product/Product";
import Shortreview from "../Shortreview/Shortreview";
import "./Home.css";
import useReviews from "../../hooks/useReviews";
import { Link } from "react-router-dom";

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
      <Link to="/review">
        <button className="bg-sky-600 hover:bg-sky-700 px-7 my-10 rounded-md text-white">
          See all reviews
        </button>
      </Link>
    </div>
  );
};

export default Home;
