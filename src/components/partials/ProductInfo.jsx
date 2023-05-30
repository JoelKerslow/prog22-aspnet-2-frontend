import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import PageIndicator from "./PageIndicator";
import FavouriteIcon from "./FavouriteIcon";
import UserProductReview from "./UserProductReview";
import { CartContext } from "../../contexts/CartContext";
import { placeholderImage } from "../../contexts/ProductContext";

const ProductInfo = ({ product, productReviews }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [latestReviews, setLatestReviews] = useState();
  const navigate = useNavigate();
  const { addCartItem } = useContext(CartContext);

  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
  const colorList = [
    "Red",
    "Blue",
    "Beige",
    "Darkblue",
    "Black",
    "White",
    "Green",
  ];

  useEffect(() => {
    if (setLatestReviews !== null) {
      setLatestReviews([]);
    }
    setLatestReviews(
      productReviews
        .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
        .slice(0, 5)
    );

    setSelectedColor(product.color);
    setSelectedSize(product.size);
  }, [product, productReviews]);

  // const handleColorClick = (color) => {
  //   setSelectedColor(color);
  // };

  // const handleSizeClick = (size) => {
  //   setSelectedSize(size);
  // };

  const handleAddToCart = () => {
    addCartItem(product.id, quantity);
  };

  return (
    <>
      <div className="product-info-container">
        <div className="product-image-container mb-3">
          <img
            className="product-image"
            src={
              product.imageUrl !== null ? product.imageUrl : placeholderImage
            }
            alt=""
          />
          <div className="image-indicator">
            <PageIndicator currentPage={1} />
          </div>
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
                  // onClick={() => handleSizeClick(size)}
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
                    // onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="section-title">Description</div>
            <p>{product.description}</p>
          </div>
          <div className="button-container">
            <button
              className="BigBlackButton add-to-cart-btn"
              onClick={() => handleAddToCart()}
            >
              + ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="d-flex justify-content-between mt-5">
          <div className="d-flex">
            <div className="reviews-header">
              Reviews ({product.reviewCount})
            </div>
            <a href={`/ProductSubmitedReviews/${product.id}`}>
              view all <span>&gt;</span>
            </a>
          </div>
        </div>
        {latestReviews && (
          <div>
            {latestReviews.map((review) => {
              return <UserProductReview key={review.id} review={review} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductInfo;
