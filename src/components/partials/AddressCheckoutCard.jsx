import { React, useState, useEffect, useContext } from "react";
import { getUserAddresses } from "../../services/AddressService";
import { UserContext } from "../../contexts/UserContext";
import { AuthorizationContext } from '../../contexts/AuthorizationContext';
import AddAddress from "../partials/AddAddress"

const AddressCheckoutCard = () => {
    const { useAuthorization } = useContext(AuthorizationContext)
    useAuthorization()
	const [shippingAddress, setShippingAddress] = useState({});
	const [userAddresses, setUserAddresses] = useState([]);

	const { currentUser } = useContext(UserContext);

	const getAdressesAsync = async (id) => {
		const res = await getUserAddresses(id);
		setUserAddresses(res);
        setShippingAddress(res[0])
        console.log(shippingAddress)
	};

    useEffect(()=>{
        getAdressesAsync(currentUser.id)
    }, [currentUser])

	return (
		<div className="addressCheckOut">
			{shippingAddress === null || Object.keys(shippingAddress).length === 0? <AddAddress /> : 
			<div>
			<div className="shippingDetails">
				<div className="shippingDetailHeadline">Shipping Details</div>
				<div className="shippDetailsAddress">{shippingAddress.addressline1}, {shippingAddress.postalCode} {shippingAddress.city}</div>
			</div>
			<div className="changeAddressLink">
				<i className="fa-regular fa-angle-right"></i>
			</div>
			</div>
}
		</div>
	);
};

export default AddressCheckoutCard;
