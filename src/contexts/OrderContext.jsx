import Cookies from "js-cookie";
import { createContext, useState } from "react";

export const OrderContext = createContext();
export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});


  const orderBaseUrl =
    "https://aspnet2-grupp1-backend.azurewebsites.net/api/Orders";
  const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0";

  const sendOrder = async (
    customerId,
    totalAmount,
    customerComment,
    promoCodeId,
    items
  ) => {
    const orderDetails = items.map(({ productId, quantity }) => ({
      productId: productId,
      quantity: quantity,
    }));

    const orderData = {
      customerId: customerId,
      totalAmount: totalAmount,
      customerComment: customerComment,
      promoCodeId: promoCodeId,
      orderDetails: orderDetails,
    };

    try {
      const res = await fetch(orderBaseUrl, {
        method: "POST",
        headers: {
          "API-KEY": apiKey,
          Authorization: "Bearer " + Cookies.get("maneroToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      console.log(res);
      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || res.status);
      }

      const orderResponse = await res.json();
      setOrder(orderResponse);
      console.log("An order has been placed:", orderResponse);
    } catch (error) {
      console.log("Failed to place an order:", error);
    }
  };

  const getOrderById = async (orderId) => {
    await fetch(orderBaseUrl + '/Id?orderId=' + orderId, {
      headers: {
        "API-KEY": apiKey,
        Authorization: "Bearer " + Cookies.get("maneroToken"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error fetching product')
        }
      })
      .then((data) => {
        setCurrentOrder(data)
        console.log(currentOrder)
      })
      .catch((error) => {
        console.error('Error fetching order:', error)
      })
  }

  // const handleOrder = () => {                       => Should be copied to Checkout component
  //   if (cart?.cartItems) {
  //     const items = cart.cartItems.map((item) => ({
  //       productId: item.productId,
  //       quantity: item.quantity,
  //     }));

  //     sendOrder(
  //       cart.customerId,
  //       cart.totalAmountWithDiscount,
  //       "Test",                                      => Get input value instead
  //       cart.promoCode?.id,
  //       items
  //     );
  //   }
  // };

  return (
    <OrderContext.Provider value={{ sendOrder, getOrderById, order, currentOrder, setCurrentOrder, orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
