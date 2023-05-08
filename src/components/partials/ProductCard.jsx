import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
  const { getProductById, currentProduct, setCurrentProduct } = useContext(ProductContext);
  const navigate = useNavigate();


  useEffect(() => {
    getProductById(1);
  }, []);


  
  const handleProductClick = () => {
    // setCurrentProduct(product)
    navigate(`/product/${currentProduct.id}`);
  };

  return (
    <>
      {currentProduct && (
        <div className="product-card" onClick={() => handleProductClick()}>
          <div className="top-section">
            <div className="image-section">
              <img
                className="product-image"
                src={currentProduct.imageUrl}
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
              <StarRating rating={currentProduct.reviewAverage} />
              (1)
            </div>
            <div className="category">{currentProduct.category}</div>
            <div className="name">{currentProduct.title}</div>
            <div className="price">${currentProduct.price}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
