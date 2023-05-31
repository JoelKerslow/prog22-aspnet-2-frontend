import React from 'react'
import Header from '../partials/Header'
import CircleWithIcon from '../partials/generalPartials/CircleWithIcon'
import VerticalBar from '../partials/generalPartials/VerticalBar'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const OrderStatus = ({ orderNumber, orderStatus }) => {
  const navigate = useNavigate();

//   useEffect(() => {
//     if(orderNumber === null || orderNumber === undefined){
//         navigate("/OrderHistory");
//       }
//   })

  return (
    <>
        <Header headerContent={"Track your order"} useGoBackButton={true} />
        <div className='main-page mt-3'>
            <CircleWithIcon size={"sm"} iconName={"fa-location-dot"} />
            <VerticalBar />
            <div className='orderText'>
                <h2>Your order:</h2>
                <p>#{orderNumber}53252352</p>
            </div>
            <div className='container mt-5 mx-2'>
                <div className='row'>
                    <div className='col-3 tracking-icons mt-3'>
                        <i className="fa-regular fa-circle-dot fa-2xl"></i>
                        <VerticalBar />
                        <i className="fa-regular fa-circle-dot fa-2xl"></i>
                        <VerticalBar />
                        <i className="fa-regular fa-circle-dot fa-2xl"></i>
                        <VerticalBar />
                        <i className="fa-regular fa-circle-dot fa-2xl"></i>
                        <VerticalBar />
                        <i className="fa-regular fa-circle-dot fa-2xl"></i>
                    </div>
                    <div className='text-order-track col-9'>
                        <div className='text-bubble1'>
                            <h6 className='text-order-status'>Order created</h6>
                            <p className='under-text-order-status'>date and stuff</p>
                        </div>
                        <div className='text-bubble2'>
                            <h6 className='text-order-status'>Order created</h6>
                            <p className='under-text-order-status'>date and stuff</p>
                        </div>
                        <div className='text-bubble3'>
                            <h6 className='text-order-status'>Order created</h6>
                            <p className='under-text-order-status'>date and stuff</p>
                        </div>
                        <div className='text-bubble4'>
                            <h6 className='text-order-status'>Order created</h6>
                            <p className='under-text-order-status'>date and stuff</p>
                        </div>
                        <div className='text-bubble5'>
                            <h6 className='text-order-status'>Order created</h6>
                            <p className='under-text-order-status'>date and stuff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OrderStatus