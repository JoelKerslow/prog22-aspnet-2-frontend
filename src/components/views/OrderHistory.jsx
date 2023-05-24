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
            console.log(data);
          } else {
            setOrders([]);
            
          }
          setLoading(false);
        } catch (error) {
          
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
        <div className="order-list">
          {orders.map(order => (
            <div key={order.id} className="order-banner">
              {/* Order details */}
              <div className="order-id">Order ID: {order.id}</div>
              <div className="order-date">Order Date: {order.orderDate}</div>
              <div className="order-status">Status: {order.status}</div>
              <div className="order-amount">Total Amount: {order.totalAmount}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default OrderHistoryView;
import React from 'react'
import Header from '../partials/Header'
import { Link } from 'react-router-dom'

const OrderHistory = () => {
  return (
    <div>
        <Header headerContent={"Order history"} useGoBackButton={true} />
        <div className='container mt-2'>
            <ul className='list-group'>
                <Link to="/Orders" className="list-group-item pt-3 pb-1">
                    <div className="order-orderInfo">
                        <p className='order-number'>#100348</p>
                        <p className='order-date'>Apr 17, 2023 at 7:55 PM</p>
                    </div>
                    <div className="order-status">
                        <p className='order-status-text'>Shipping <i className='fa-regular fa-truck'></i></p> 
                        <p className='order-price'>$3000</p>
                    </div>
                </Link>
            </ul>
        </div>
    </div>
  ) 
}

export default OrderHistory