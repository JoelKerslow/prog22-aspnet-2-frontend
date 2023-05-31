import { React, useContext, useEffect, useState } from 'react'
import Header from '../partials/Header'
import AddressCard from '../partials/AddressCard'
import AddAddress from '../partials/AddAddress'
import { UserContext } from "../../contexts/UserContext"
import { getUserAddresses } from '../../services/AddressService'
import { AuthorizationContext } from '../../contexts/AuthorizationContext'
import Navbar from '../partials/Navbar'

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

  return (
		<div>
			<Header headerContent="My Address" useGoBackButton={true} />
			{
        userAddresses.length === 0 ? (<div className="loadingAddress">Loading</div>) : 
        userAddresses.map(address => (<AddressCard userAddress={address} />))       
      }



			<AddAddress />
      <Navbar />
		</div>
	);
}

export default UserAddresses
