import React from "react";
import "./Shortreview.css";
import { PhoneIcon } from "@heroicons/react/solid";

const Shortreview = ({ review }) => {
  const { img, name, profetion, ratings, recomendation, comment } = review;
  return (
    <div className="review">
      <img src={img} alt=""></img>
      <hr />
      <div className="review-info">
        <p className="review-name">{name}</p>
        <p>Comment: {comment}</p>
        <p>
          <small>Profetion: {profetion}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
        <p>
          <small>Recomendation: {recomendation}</small>
        </p>
      </div>
      <button className="btn-cart">
        <p className="btn-text flex flex-col items-center justify-center">
          <span>Call</span>

          <PhoneIcon></PhoneIcon>
        </p>
      </button>
    </div>
  );
};

export default Shortreview;
