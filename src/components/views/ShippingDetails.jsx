import { React, useContext, useEffect, useState } from 'react'
import ProductReviewSiteHead from '../partials/ProductReviewSiteHead'
import { UserContext } from "../../contexts/UserContext"
import { getUserAddresses } from '../../services/AddressService'
import { AuthorizationContext } from '../../contexts/AuthorizationContext'

const ShippingDetails = () => {
  const { useAuthorization } = useContext(AuthorizationContext)
  useAuthorization()
  const { currentUser } = useContext(UserContext);
  const [ userAddresses, setUserAddresses] = useState([])
    
  const getAdressesAsync = async (id) =>{
    const res = await getUserAddresses(id)
    setUserAddresses(res)
  }
  
  useEffect(()=>{
    getAdressesAsync(currentUser.id);
  }, [currentUser])

  return (
    <div>
      <ProductReviewSiteHead text="Shipping Details" />
    </div>
  )
}

export default ShippingDetails
