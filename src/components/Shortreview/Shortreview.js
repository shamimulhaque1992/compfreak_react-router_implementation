import React from 'react';
import "./Shortreview.css"

const Shortreview = ({review}) => {
    const { img, name, profetion, ratings, recomendation, comment } = review;
    return (
        <div className="review">
            <img src={img} alt=""></img>
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
                    <small>Recomendation: {recomendation} more available</small>
                </p>
            </div>
        </div>
    );
};

export default Shortreview;