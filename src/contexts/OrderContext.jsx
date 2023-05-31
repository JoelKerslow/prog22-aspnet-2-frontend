import Cookies from "js-cookie";
import { createContext, useState, useContext } from "react";
import { AuthorizationContext } from "./AuthorizationContext";
import { UserContext } from "./UserContext";
import { useNavigate } from 'react-router';

export const OrderContext = createContext();
export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const { useAuthorization, authorize } = useContext(AuthorizationContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const tokenValid = await authorize();

      if (!tokenValid || !currentUser || !currentUser.id) {
        navigate('/signin');
        return;
      }
      
      const customerId = currentUser.id; // Retrieve the customer ID from currentUser
      const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0'
      const token = Cookies.get('maneroToken');
      const url = `https://aspnet2-grupp1-backend.azurewebsites.net/api/Orders?customerId=${customerId}`;
      

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "API-KEY": apiKey
        },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        await setOrders(data);
        console.log(data);
      } else {
        setOrders([]);
        
      }
    } catch (error) {
      
    }
  };


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
    <OrderContext.Provider value={{ sendOrder, getOrderById, order, currentOrder, setCurrentOrder, orders, setOrders, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
