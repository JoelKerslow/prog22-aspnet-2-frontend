import { React, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from "../../contexts/UserContext"


const AddressCard = ({ userAddress }) => {
  const mockAddress = {
    "title" : "Home",
    "addressLine1" : "Skvadronvägen 1a",
    "postalCode" : "746 52",
    "city": "Bålsta",
  }
  return (
    <div className='addressCard'>
      <div className="cardContent">
        <div className='addressIcon'><i className="fa-light fa-house"></i></div>
        <div className='addressInfo'>
          <div className="addressTitle">{mockAddress.title}</div>
          <div className="addressDetails">{mockAddress.addressLine1}, {mockAddress.postalCode} {mockAddress.city}</div>
        </div>
        <NavLink path="/" className='editAddressLink' > {/* needs to be completed with actual link */}
          <div className='editAddressIcon'><i className={`fa-light ${userAddress.icon} fa-xs`}></i></div>
        </NavLink>
      </div>
    </div>
  )
}

export default AddressCard
