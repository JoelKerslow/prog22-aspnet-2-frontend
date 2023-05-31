import React, { useContext, useEffect, useState } from 'react';
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import { OrderContext } from '../../contexts/OrderContext';
import { UserContext } from '../../contexts/UserContext';

const OrderHistory = () => {
    const [loading, setLoading] = useState(true);
    const { setCurrentOrder, orders, setOrders, fetchOrders } = useContext(OrderContext);
    const { useAuthorization, authorize } = useContext(AuthorizationContext);
    const { currentUser } = useContext(UserContext);
    useAuthorization();

    const navigate = useNavigate();
  
    useEffect(() => {
      const getAllOrders = async () => {
        await fetchOrders();
        setLoading(false);
      }
      getAllOrders();
    }, [authorize, currentUser]);


    return (
        <div>
        <Header headerContent={<h1>Order History</h1>} useGoBackButton={true} showCartButton={false}  />
        {loading ? (
            <p>Loading orders...</p>
        ) : (
            <div className='container mt-2'>
                <ul className='list-group'>
                    {orders.map(order => (
                        <div className='customer-order'>
                            <Link key={order.id} to="/OrderStatus" onClick={() => setCurrentOrder(order)} className='list-group-item pt-3 pb-1' >
                                <div className="order-orderInfo">
                                    <p className='order-number'>#{order.id}</p>
                                    <p className='order-date'>{order.orderDate}</p>
                                </div>
                                <div className="order-status">
                                    <p className={`order-status-text ${order.status}`}>{order.status} <i className='fa-regular fa-truck'></i></p> 
                                    <p className='order-price'>${order.totalAmount}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        )}
        </div>
    );
};
//   return (
//     <div>
//       <Header headerContent={"Order history"} useGoBackButton={true} />
//       {loading ? (
//         <p>Loading orders...</p>
//       ) : (
//         <div className="order-list">
//           {orders.map(order => (
//             <div key={order.id} className="order-banner">
//               {/* Order details */}
//               <div className="order-id">Order ID: {order.id}</div>
//               <div className="order-date">Order Date: {order.orderDate}</div>
//               <div className="order-status">Status: {order.status}</div>
//               <div className="order-amount">Total Amount: {order.totalAmount}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
export default OrderHistory;


// import React from 'react'
// import Header from '../partials/Header'
// import { Link } from 'react-router-dom'

// const OrderHistory = () => {
//   return (
//     <div>
//         <Header headerContent={"Order history"} useGoBackButton={true} />
//         <div className='container mt-2'>
//             <ul className='list-group'>
//                 <Link to="/Orders" className="list-group-item pt-3 pb-1">
//                     <div className="order-orderInfo">
//                         <p className='order-number'>#100348</p>
//                         <p className='order-date'>Apr 17, 2023 at 7:55 PM</p>
//                     </div>
//                     <div className="order-status">
//                         <p className='order-status-text'>Shipping <i className='fa-regular fa-truck'></i></p> 
//                         <p className='order-price'>$3000</p>
//                     </div>
//                 </Link>
//             </ul>
//         </div>
//     </div>
//   ) 
// }

// export default OrderHistory


