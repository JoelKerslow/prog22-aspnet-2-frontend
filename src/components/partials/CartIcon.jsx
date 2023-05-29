import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


const CartIcon = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const {addCartItem, deleteItem} = useContext(CartContext);

  const handleAddToCartClick = () => {
    if (addedToCart) {
      deleteItem(product.id);
      setAddedToCart(false);
    } else {
      addCartItem(product.id, 1);
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
