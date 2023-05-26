import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import PageIndicator from "./PageIndicator";
import FavouriteIcon from "./FavouriteIcon";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
  const colorList = ["Red", "Blue", "Beige", "Darkblue", "Black", "White"];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

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
              <h4 className="product-name">{product.name}</h4>
              <FavouriteIcon product={product} />
            </div>
            <div
              onClick={() => {
                navigate("/reviews/" + product.id);
              }}
            >
              <StarRating
                rating={product.reviewAverage}
                reviewCount={product.reviewCount}
              />
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <h4 className="product-price">${product.price}</h4>
              <div className="product-quantity-container d-flex">
                <button
                  className="increment-btn"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <button className="product-quantity">{quantity}</button>
                <button
                  className="increment-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="section-title">Size</div>

            <div className="size-container">
              {sizeList.map((size) => (
                <div
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "selected-size" : ""
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>

            <div className="color-container section-title ">
              <div className="">Color</div>
              <div className="d-flex">
                {colorList.map((color) => (
                  <div
                    key={color}
                    className={`color-btn ${
                      selectedColor === color ? "selected-color" : ""
                    } ${color.toLowerCase()}-btn`}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>

            {/* <div className="color-container section-title ">
              <div className="">Color</div>
              <div className="d-flex">
                <div
                  className="color-btn red-btn color-btn-active"
                  onClick={() => {
                    setColor("Red");
                    handleColorClick();
                  }}
                ></div>
                <div
                  className="color-btn black-btn"
                  onClick={() => {
                    setColor("Black");
                    handleColorClick();
                  }}
                ></div>
                <div
                  className="color-btn blue-btn"
                  onClick={() => {
                    setColor("Blue");
                    handleColorClick();
                  }}
                ></div>
                <div
                  className="color-btn white-btn"
                  onClick={() => {
                    setColor("White");
                    handleColorClick();
                  }}
                ></div>
                <div
                  className="color-btn green-btn"
                  onClick={() => {
                    setColor("Green");
                    handleColorClick();
                  }}
                ></div>
                <div
                  className="color-btn red-btn"
                  onClick={() => {
                    setColor("XS");
                    handleColorClick();
                  }}
                ></div>
              </div>
            </div> */}

            <div className="section-title">Description</div>
            <p>{product.description}</p>
          </div>
          <div className="button-container">
            <button className="BigBlackButton add-to-cart-btn">
              + ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="review-section d-flex justify-content-between mt-5">
        <div className="reviews-header">Reviews ({product.reviewCount})</div>
        <a href="/reviews">
          view all <span>&gt;</span>
        </a>
      </div>
    </>
  );
};

export default ProductInfo;
