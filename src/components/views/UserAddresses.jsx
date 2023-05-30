import { React, useContext, useEffect, useState } from 'react'
import Header from '../partials/Header'
import AddressCard from '../partials/AddressCard'
import AddAddress from '../partials/AddAddress'
import { UserContext } from "../../contexts/UserContext"
import { getUserAddresses } from '../../services/AddressService'
import { AuthorizationContext } from '../../contexts/AuthorizationContext'

const UserAddresses = () => {
  const { useAuthorization } = useContext(AuthorizationContext)
  useAuthorization()
  const { currentUser } = useContext(UserContext);
  const [ userAddresses, setUserAddresses] = useState([])
    
  const getAdressesAsync = async (id) =>{
    const res = await getUserAddresses(id)
    setUserAddresses(res)
    console.log(userAddresses)
  }

  useEffect(()=>{
    getAdressesAsync(currentUser.id);
  }, [currentUser])

  const mockAddress = {
        "Title" : "Home",
        "AddressLine1" : "Skvadronvägen 1a",
        "PostalCode" : "746 52",
        "City": "Bålsta",
      }

  return (
		<div>
			<Header headerContent="My Address" />
			{
        userAddresses.length === 0 ? (<div className="loadingAddress">Loading</div>) : 
        userAddresses.map(address => (<AddressCard userAddress={address} />))       
      }



			<AddAddress />
		</div>
	);
}

export default UserAddresses
