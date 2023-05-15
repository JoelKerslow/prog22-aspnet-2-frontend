import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import PageIndicator from "./PageIndicator";
import FavouriteIcon from "./FavouriteIcon";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="product-info-container">
        <div className="product-image-container mb-3">
          <img className="product-image" src={product.imageUrl} alt="" />
          <PageIndicator currentPage={1} />
        </div>
        <div className="product-bottom-content">
          <div className="bottom-content-squeeze">
            <div className="name-favourite-container">
              <h5>{product.name}</h5>
              <FavouriteIcon product={product} />
            </div>
            <div
              onClick={() => {
                navigate("/reviews/" + product.id);
              }}
            >
              <StarRating product={product} />
            </div>
            <div className="d-flex justify-content-between">
              <h4>${product.price}</h4>
              <div>- 1 +</div>
            </div>
            <div>Size</div>
            <div className="mt-3">Color</div>
            <div className="">Description</div>
            <p>{product.description}</p>
          </div>
          <div className="button-container">
            <button className="BigBlackButton">+ ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="review-section d-flex justify-content-between mt-5">
        <div>Reviews ({product.reviewCount})</div>
        <a href="/reviews">
          view all <span>&gt;</span>
        </a>
      </div>
    </>
  );
};

export default ProductInfo;
