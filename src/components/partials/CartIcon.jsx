import React, { useState } from "react";

const CartIcon = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCartClick = () => {
    if (addedToCart) {
      //functionality to remove product to customers cart
      setAddedToCart(false);
    } else {
      //functionality to add product to customers cart
      setAddedToCart(true);
    }
  };

  return (
    <button className="cart-icon" onClick={() => handleAddToCartClick()}>
      <i className={`fa-bag-shopping ${addedToCart ? 'fa-solid' : 'fa-regular'}`}></i>
    </button>
  );
};

export default CartIcon;
