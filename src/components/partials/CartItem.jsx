import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext); // Get removeFromCart function from context
  
    return (
      <div>
        <p>{item.productName}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    );
  };
  
  export default CartItem;
  