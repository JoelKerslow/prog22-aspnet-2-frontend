import React from 'react'
import { NavLink } from 'react-router-dom'

const AddressCard = ({ userAddress }) => {
   
  return (
    <div className='addressCard'>
      <div className="cardContent">
        <div className='addressIcon'><i className="fa-light fa-house"></i></div>
        <div className='addressInfo'>
          <div className="addressTitle">{userAddress.Title}</div>
          <div className="addressDetails">{userAddress.AddressLine1}, {userAddress.PostalCode} {userAddress.City}</div>
        </div>
        <NavLink path="/" className='editAddressLink' > {/* needs to be completed with actual link */}
          <div className='editAddressIcon'><i className="fa-light fa-pen-line fa-xs"></i></div>
        </NavLink>
      </div>
    </div>
  )
}

export default AddressCard
