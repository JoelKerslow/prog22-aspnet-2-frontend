import React, { useContext, useEffect } from "react";
import Navbar from "../partials/Navbar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { placeholderImage } from "../../contexts/ProductContext";
import Header from "../partials/Header";
import { OrderContext } from "../../contexts/OrderContext";

const Cart = () => {
  const {
    cart,
    code,
    setCode,
    getUserCart,
    deleteItem,
    updateQuantity,
    applyPromoCode,
  } = useContext(CartContext);
  const { sendOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUserCart();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    applyPromoCode(code);
  }, []);

  const handleIncrement = (productId, quantity) => {
    const newQuantity = quantity + 1;
    updateQuantity(productId, newQuantity);
  };

  const handleDecrement = (productId, quantity) => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      updateQuantity(productId, newQuantity);
    }
    if (quantity === 1) deleteItem(productId);
  };

  const handleDeleteItem = (productId) => {
    deleteItem(productId);
  };

  const handlePromoCode = () => {
    applyPromoCode(code);
  };

  return (
    <>
      <Header
        headerContent={<h2>Cart</h2>}
        useGoBackButton={true}
        showCartButton={true}
      />
      <div className="cart-list-container">
        {cart?.cartItems?.map((item) => (
          <div key={item.product.id} className="cart-container">
            <div className="cart-item-section">
              <div className="cart-image-section">
                <img
                  className="cart-image"
                  src={
                    item.product.imageUrl !== null
                      ? item.product.imageUrl
                      : placeholderImage
                  }
                  alt=""
                />
                {cart.promoCode && <div className="sale-badge">SALE</div>}
              </div>
              <div className="item-info">
                <p>{item.product.name}</p>
                <div className="item-price">
                  <p>${item.product.price}</p>
                  {cart.promoCode && (
                    <p style={{ color: "red" }}>
                      $
                      {(item.product.price *
                        item.quantity *
                        (100 - cart.promoCode.discount)) /
                        100}
                    </p>
                  )}
                </div>
                <p>Size: {item.product.size}</p>
                <p>Color: {item.product.color}</p>
              </div>
              <div className="counter">
                <div
                  className="counter-top"
                  onClick={() =>
                    handleIncrement(item.product.id, item.quantity)
                  }
                >
                  +
                </div>
                <div className="counter-middle">{item.quantity}</div>
                <div
                  className="counter-bottom"
                  onClick={() =>
                    handleDecrement(item.product.id, item.quantity)
                  }
                >
                  -
                </div>
              </div>
              <div
                className="delete"
                onClick={() => handleDeleteItem(item.product.id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "lightgray" }}
                />
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className="promo-code-section">
          <input
            type="text"
            placeholder="Promocode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={false}
            className="code-input"
          />
          <button className="code-button" onClick={handlePromoCode}>
            Apply
          </button>
          <p>
            {cart.promoCode ? (
              <>
                Promocode applied
                <span>
                  <FontAwesomeIcon icon={faCheck} className="green-icon" />
                </span>
              </>
            ) : (
              <>
                Promocode not applied
                <span>
                  <FontAwesomeIcon icon={faTimes} className="red-icon" />
                </span>
              </>
            )}
          </p>
        </div>
        <div className="price-section">
          <table className="table">
            <tbody>
              <tr>
                <td className="title" style={{ fontWeight: "bold" }}>
                  Subtotal
                </td>
                <td className="value" style={{ fontWeight: "bold" }}>
                  ${cart.totalAmountWithoutDiscount}
                </td>
              </tr>
              <tr>
                <td className="title">Discount</td>
                <td className="value">-{cart.discountAmount}</td>
              </tr>
              <tr>
                <td className="title">Delivery</td>
                <td className="value" style={{ color: "green" }}>
                  Free
                </td>
              </tr>
              <tr>
                <td className="title" style={{ fontWeight: "bold" }}>
                  Total
                </td>
                <td className="value" style={{ fontWeight: "bold" }}>
                  ${cart.totalAmountWithDiscount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-section">
          <button
            className="BigBlackButton"
            onClick={() => {
              navigate("/order");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <div className="profile-navbar">
        <Navbar />
      </div>
    </>
  );
};

export default Cart;
