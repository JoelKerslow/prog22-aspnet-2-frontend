import React, { useContext, useState } from "react";
import Header from "../partials/Header";
import AddressCheckoutCard from "../partials/AddressCheckoutCard";
import { CartContext } from "../../contexts/CartContext";
import { OrderContext } from "../../contexts/OrderContext";

const Order = () => {
  const { cart } = useContext(CartContext);
  const { sendOrder } = useContext(OrderContext);
  const [orderComment, setOrderComment] = useState("");

  const handleConfirmOrder = () => {
    if (cart?.cartItems) {
      const items = cart.cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      }));

      sendOrder(
        cart.customerId,
        cart.totalAmountWithDiscount,
        orderComment,
        cart.promoCodeId,
        items
      );
    }
  };

  return (
    <>
      <Header headerContent={<h2>Checkout</h2>} useGoBackButton={true} />
      <div className="checkout-container">
        <div className="order-details">
          <table className="table">
            <thead>
              <tr>
                <td className="title" style={{ fontWeight: "bold" }}>
                  My order
                </td>
                <td className="value" style={{ fontWeight: "bold" }}>
                  ${cart.totalAmountWithDiscount}
                </td>
              </tr>
            </thead>
            <tbody>
              {cart?.cartItems?.map((item) => (
                <tr key={item.id}>
                  <td className="title">
                    {item.product.name}, {item.product.size},{" "}
                    {item.product.color}
                  </td>
                  <td className="value">
                    {item.quantity} x ${item.product.price}
                  </td>
                </tr>
              ))}
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
            </tbody>
          </table>
        </div>
        <div className="address-section">
        <AddressCheckoutCard/>
        </div>
        <label
          htmlFor="comment"
        >
          COMMENT
        </label>
        <div className="checkout-form">
          <textarea
            id="comment "
            placeholder="Enter your comment"
            onChange={(e) => setOrderComment(e.target.value)}
          />
          <button className="BigBlackButton" onClick={handleConfirmOrder}>
            CONFIRM ORDER
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;