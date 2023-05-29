import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddressCard = ({ userAddress }) => {
  const navigate = useNavigate() 

  return (
    <div className='addressCard'>
      <div className="cardContent">
        <div className='addressIcon'><i className="fa-light fa-house"></i></div>
        <div className='addressInfo'>
          <div className="addressTitle">{userAddress.Title}</div>
          <div className="addressDetails">{userAddress.AddressLine1}, {userAddress.PostalCode} {userAddress.City}</div>
        </div>
        <div onClick={() => navigate('/Profile/Addresses/Manage', { state: { userAddress: userAddress } })} className='editAddressLink' >
          <div className='editAddressIcon'><i className="fa-light fa-pen-line fa-xs"></i></div>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
