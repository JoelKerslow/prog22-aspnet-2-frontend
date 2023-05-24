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