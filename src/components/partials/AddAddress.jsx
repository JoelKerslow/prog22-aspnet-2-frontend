import React from 'react'
import { NavLink } from 'react-router-dom'

const AddAddress = () => {
  return (
		<div className="addAddress">
			<NavLink to="Manage" className="linkBox">  {/* needs to be completed with actual link */}
				<div className="addIcon"><i className="fa-regular fa-plus fa-lg"></i></div>
				<div className="textLine">Add a new address</div>
			</NavLink>
		</div>
	);
}

export default AddAddress
