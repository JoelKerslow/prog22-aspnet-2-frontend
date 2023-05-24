import React from 'react'

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
        <div className="editAddressLink"><i className="fa-light fa-pen-line"></i></div>
      </div>
    </div>
  )
}

export default AddressCard
