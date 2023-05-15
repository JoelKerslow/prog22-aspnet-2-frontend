import React from "react";
import { useNavigate } from "react-router-dom";

const StarRating = ({ product }) => {

  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-sharp fa-star ${
        index < product.reviewAverage ? "fa-solid" : "fa-regular"
      }`}
    ></i>
  ));

  return (
    <div className="rating-section d-flex">
      <div className="star-rating">{stars}</div>({product.reviewCount})
    </div>
  );
};

export default StarRating;