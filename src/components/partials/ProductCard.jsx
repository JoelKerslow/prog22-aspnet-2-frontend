import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
import FavouriteIcon from "./FavouriteIcon";
import CartIcon from "./CartIcon";
import {placeholderImage} from '../../contexts/ProductContext'


const ProductCard = ({ product }) => {
  const { setCurrentProduct, setProductReviews } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleProductClick = () => {
    setCurrentProduct(product);
    setProductReviews(product.reviews)
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      {product && (
        <div className="product-card" >
          <div className="top-section">
            <div className="image-section">
              <img className="product-image" src={product.imageUrl !== null ? product.imageUrl : placeholderImage} alt="" onClick={() => handleProductClick()} />
              <div className="menu">
                <div className="icons">
                  <FavouriteIcon product={product} />
                  <CartIcon product={product} />
                </div>
              </div>
            </div>
          </div>
          <div className="body-section" onClick={() => handleProductClick()}>
            <StarRating
              rating={product.reviewAverage} reviewCount={product.reviewCount}
            />
            <div className="name">{product.name}</div>
            <div className="price">${product.price}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;