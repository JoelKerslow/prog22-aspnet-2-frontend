import React from 'react'
import Header from '../partials/Header'
import AddressCard from '../partials/AddressCard'
import AddAddress from '../partials/AddAddress'

const UserAddresses = () => {
    const mockAddress = {
        "Title" : "Home",
        "AddressLine1" : "Skvadronvägen 1a",
        "PostalCode" : "746 52",
        "City": "Bålsta",
      }

  return (
    <div>
      <Header headerContent="My Address" />
      <AddressCard userAddress={mockAddress}/>
      <AddressCard userAddress={mockAddress}/>
      <AddressCard userAddress={mockAddress}/>
      <AddAddress />
    </div>
  )
}

export default UserAddresses
