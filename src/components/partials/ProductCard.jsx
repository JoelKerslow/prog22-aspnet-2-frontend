import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
const ProductCard = ({product}) => {
  const { setCurrentProduct } = useContext(ProductContext);
  const navigate = useNavigate();

 
  const handleProductClick = () => {
    setCurrentProduct(product)
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      {product && (
        <div className="product-card" onClick={() => handleProductClick()}>
          <div className="top-section">
            <div className="image-section">
              <img
                className="product-image"
                src={product.imageUrl}
                alt=""
              />
              <div className="menu">
                <div className="icons">
                  <button className="link">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="link">
                    <i className="fa-regular fa-bag-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="body-section">
            <div className="rating-section d-flex">
              <StarRating rating={product.reviewAverage} />
              ({product.reviewCount})
            </div>
            <div className="category">{product.category}</div>
            <div className="name">{product.title}</div>
            <div className="price">${product.price}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
