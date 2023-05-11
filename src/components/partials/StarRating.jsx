import React from "react";

const StarRating = ({ rating, reviewCount }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-sharp fa-star ${
        index < rating ? "fa-solid" : "fa-regular"
      }`}
    ></i>
  ));

  return (
    <div className="rating-section d-flex">
      <div className="star-rating">{stars}</div>({reviewCount})
    </div>
  );
};

export default StarRating;