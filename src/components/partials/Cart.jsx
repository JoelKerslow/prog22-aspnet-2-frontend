import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cart;
