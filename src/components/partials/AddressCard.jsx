import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../contexts/UserContext"


const AddressCard = ({ userAddress }) => {
  const navigate = useNavigate() 

  return (
    <div className='addressCard'>
      <div className="cardContent">
        <div className='addressIcon'><i className={`fa-light ${userAddress.icon}`}></i></div>
        <div className='addressInfo'>
          <div className="addressTitle">{userAddress.title}</div>
          <div className="addressDetails">{userAddress.addressline1}, {userAddress.postalCode} {userAddress.city}</div>
        </div>
        <div onClick={() => navigate('/Profile/Addresses/Manage', { state: { userAddress: userAddress } })} className='editAddressLink' >
          <div className='editAddressIcon'><i className="fa-light fa-pen-line fa-xs"></i></div>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
