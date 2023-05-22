import React, { useContext, useEffect, useState } from 'react';
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import Cookies from "js-cookie";
import { UserContext } from "../../contexts/UserContext";

const OrderHistoryView = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { authorize } = useContext(AuthorizationContext);
    const { currentUser } = useContext(UserContext);
  
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const tokenValid = await authorize();
  
          if (!tokenValid || !currentUser) {
            // Handle unauthorized access or redirect to login
            return;
          }
  
          const customerId = currentUser.customerId; // Retrieve the customer ID from currentUser
          const token = Cookies.get('maneroToken');
          const url = `https://aspnet2-grupp1-backend.azurewebsites.net/api/Orders?customerId=${customerId}`;
  
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
  
          setOrders(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
  
      fetchOrders();
  }, [authorize, currentUser]);

  return (
    <div>
      <h2>Order History</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              {/* Display order details */}
              Order ID: {order.id}, Total: {order.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistoryView;