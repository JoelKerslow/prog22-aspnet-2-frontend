import React from 'react'
import Header from '../partials/Header'
import AddressCard from '../partials/AddressCard'
import AddAddress from '../partials/AddAddress'

const UserAddresses = () => {
  return (
    <div>
      <Header headerContent="My Address" />
      <AddressCard />
      <AddressCard />
      <AddressCard />
      <AddAddress />
    </div>
  )
}

export default UserAddresses
