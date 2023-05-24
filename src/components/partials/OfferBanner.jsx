import React from 'react'
import { NavLink } from 'react-router-dom';

const OfferBanner = ({offer}) => {
  return (
		<div>
			<div className="offerContainer">
				{!offer ? <div className="offerText">Great Offer</div>:<div className="offerText">{offer}</div>}
				<div className="offerText">{!offer}</div>
				<div>
					<NavLink className="productsLink" to="/SearchProducts">
						<button className="whiteButton">Shop Now</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default OfferBanner
