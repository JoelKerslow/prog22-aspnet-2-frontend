import React, { useContext } from "react";
import Header from "../partials/Header";
import CircleWithIcon from "../partials/generalPartials/CircleWithIcon";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { OrderContext } from "../../contexts/OrderContext";

const OrderStatus = () => {
  const navigate = useNavigate();
  const { currentOrder } = useContext(OrderContext);

  useEffect(() => {
    console.log(currentOrder);
    if (
      currentOrder.id === null ||
      currentOrder.id === undefined ||
      currentOrder.id === NaN
    ) {
      navigate("/OrderHistory");
    }
  });

  const newDate = new Date(currentOrder.orderDate);
  const fixedOrderDate = `${newDate.getDate()} ${newDate.toLocaleString(
    "default",
    { month: "long" }
  )} ${newDate.getFullYear()}`;

  const shippingDate = new Date(currentOrder.orderDate);
  shippingDate.setDate(shippingDate.getDate() + 4);
  const fixedShippingDate = `${shippingDate.getDate()} ${shippingDate.toLocaleString(
    "default",
    { month: "long" }
  )} ${shippingDate.getFullYear()}`;

  const deliveryDate = new Date(currentOrder.orderDate);
  shippingDate.setDate(shippingDate.getDate() + 10);
  const fixedDeliveryDate = `${shippingDate.getDate()} ${shippingDate.toLocaleString(
    "default",
    { month: "long" }
  )} ${shippingDate.getFullYear()}`;

  console.log(fixedDeliveryDate);

  //   const shippingDate = new Date(fixedOrderDate.getFullYear(), fixedOrderDate.getMonth(), fixedOrderDate.getDate()+3);

  return (
    <>
      <Header headerContent={"Track your order"} useGoBackButton={true} />
      <div className="main-page mt-3">
        <CircleWithIcon size={"sm"} iconName={"fa-location-dot"} />
        <VerticalBar />
        <div className="orderText">
          <h2>Your order:</h2>
          <p>#{currentOrder.id}</p>
        </div>
        <div className="container-fluid mt-4">
          <div className="row big-row">
            <div className="first-row col">
              <i className="fa-regular fa-circle-dot fa-2xl"></i>
              <VerticalBar />
            </div>
            <div className="text-bubble col">
              <h6 className="text-order-status">Order created</h6>
              {fixedOrderDate ? (
                <p className="under-text-order-status">{fixedOrderDate}</p>
              ) : (
                <p className="under-text-order-status">Date Unavailable</p>
              )}
            </div>
          </div>
          <div className="row big-row">
            <div className="first-row col">
              {currentOrder.status === "Pending" ? (
                <i className="fa-regular fa-circle-dot fa-2xl"></i>
              ) : (
                <i className="fa-regular fa-circle fa-2xl"></i>
              )}
              <VerticalBar />
            </div>
            <div className="text-bubble col">
              <h6 className="text-order-status">Order confirmed</h6>
              <p className="under-text-order-status">{fixedOrderDate}</p>
            </div>
          </div>
          <div className="row big-row">
            <div className="first-row col">
              {currentOrder.status === "Shipping" ? (
                <i className="fa-regular fa-circle-dot fa-2xl"></i>
              ) : (
                <i className="fa-regular fa-circle fa-2xl"></i>
              )}
              <VerticalBar />
            </div>
            <div className="text-bubble col">
              <h6 className="text-order-status">Order shipping</h6>
              <p className="under-text-order-status">
                Estimated shipping date: {fixedShippingDate}
              </p>
            </div>
          </div>
          <div className="row big-row">
            <div className="first-row col">
              {currentOrder.status === "Delivering" ? (
                <i className="fa-regular fa-circle-dot fa-2xl"></i>
              ) : (
                <i className="fa-regular fa-circle fa-2xl"></i>
              )}
              <VerticalBar />
            </div>
            <div className="text-bubble col">
              <h6 className="text-order-status">Courier delivering</h6>
              <p className="under-text-order-status">
                Estimated delivery date: {fixedDeliveryDate}
              </p>
            </div>
          </div>
          <div className="row big-row">
            <div className="first-row col">
              {currentOrder.status === "Receiving" ? (
                <i className="fa-regular fa-circle-dot fa-2xl"></i>
              ) : (
                <i className="fa-regular fa-circle fa-2xl"></i>
              )}
            </div>
            <div className="text-bubble col">
              <h6 className="text-order-status">Receiving</h6>
              <p className="under-text-order-status">
                Estimated delivery date: {fixedDeliveryDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
