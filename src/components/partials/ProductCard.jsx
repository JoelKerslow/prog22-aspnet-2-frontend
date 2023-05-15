import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
import FavouriteIcon from "./FavouriteIcon";
import CartIcon from "./CartIcon";
const ProductCard = ({ product }) => {
  const { setCurrentProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleProductClick = () => {
    setCurrentProduct(product);
    navigate(`/product/${product.id}`);
  };

  const handleFavouriteClick = () => {
    //Functionality to add product to wishlist
  };

  const handleAddToCartClick = () => {
    //Functionality to att product to cart
  };

  return (
    <>
      {product && (
        <div className="product-card" >
          <div className="top-section">
            <div className="image-section">
              <img className="product-image" src={product.imageUrl} alt="" onClick={() => handleProductClick()} />
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
              product={product}
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