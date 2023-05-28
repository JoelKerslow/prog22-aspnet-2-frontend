import React, { useEffect, useState, useContext } from "react";
import CircleWithIcon from "../partials/generalPartials/CircleWithIcon";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderByCustomerId } from "../../services/OrderService";
import { UserContext } from "../../contexts/UserContext";

const OrderResult = () => {
  const navigate = useNavigate();
  const { outcome } = useParams();
  const { orderId } = useParams();
  const {currentUser} = useContext(UserContext);

  const [orderExists, setOrderExists] = useState(false);

  const verifyOrderId = async () => {
    //Fetch orderId and see that it's correct
    const order = getOrderByCustomerId(currentUser.id);
    orderId === null || order === undefined ? setOrderExists(false) : setOrderExists(true);
    console.log(currentUser)
    console.log(order)
  };

  useEffect(() => {
    verifyOrderId();
  }, []);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
    {orderExists ? (
      outcome === "success" ? (
        <div className="order-result-container">
          <CircleWithIcon
            theme="circle-with-icon-green"
            iconStyle="fa-solid"
            iconName="fa-check"
          />
          <VerticalBar />
          <div className="section-title">Thank you for your order!</div>
          <div>Your order will be delivered on time. Thank you!</div>

          <button
            className="BigBlackButton mt-3 mb-2"
            onClick={() => navigate("/orders")}
          >
            VIEW ORDERS
          </button>
          <button
            className="white-btn"
            onClick={() => navigate("/searchproducts")}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div className="order-result-container">
          <CircleWithIcon
            theme="circle-with-icon-red"
            iconStyle="fa-solid"
            iconName="fa-xmark"
          />
          <VerticalBar />
          <div className="section-title">Sorry! Your order has failed!</div>
          <div>
            Something went wrong. Please try again to continue your order.
          </div>

          <button
            className="BigBlackButton mt-3 mb-2"
            onClick={() => navigate("/orders")}
          >
            TRY AGAIN
          </button>
          <button
            className="white-btn"
            onClick={() => navigate("/Profile")}
          >
            GO TO MY PROFILE
          </button>
        </div>
      )
    ) : (
      <div>Ops.. Nothing to see here.</div>
    )}
    </div>
  );
};

export default OrderResult;
