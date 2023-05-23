import React, { useContext, useEffect, useState } from 'react';
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import Cookies from "js-cookie";
import { UserContext } from "../../contexts/UserContext";

const OrderHistoryView = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { useAuthorization, authorize } = useContext(AuthorizationContext);
    useAuthorization();

    const { currentUser } = useContext(UserContext);
  
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const tokenValid = await authorize();
  
          if (!tokenValid || !currentUser || !currentUser.id) {
            // Handle unauthorized access or redirect to login
            return;
          }
          
          console.log('Current User:', currentUser); // Log the current user
  
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
            setOrders(data);
            console.log('Orders:', data);
          } else {
            setOrders([]);
            console.log('No orders found.');
          }
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
              <p>Order ID: {order.id}</p>
              <p>Order Date: {order.orderDate}</p>
              <p>Status: {order.status}</p>
              <p>Total Amount: {order.totalAmount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistoryView;