import React from 'react'
import { NavLink } from 'react-router-dom'

const AddressCard = () => {

const mockAddress = {
  "Title" : "Home",
  "Street" : "Skvadronvägen 1a",
  "PostalCode" : "74652",
  "City": "Bålsta",
}

  return (
    <div className='addressCard'>
      <div className="cardContent">
        <div className='addressIcon'><i className="fa-light fa-house"></i></div>
        <div className='addressInfo'>
          <div className="addressTitle">{mockAddress.Title != null ? mockAddress.Title : "Standard"}</div>
          <div className="addressDetails">{mockAddress.Street}, {mockAddress.PostalCode} {mockAddress.City}</div>
        </div>
        <NavLink path="/" className='editAddressLink' > {/* needs to be completed with actual link */}
          <div className='editAddressIcon'><i className="fa-light fa-pen-line fa-xs"></i></div>
        </NavLink>
      </div>
    </div>
  )
}

export default AddressCard
