import React from 'react'

const OfferBanner = ({offer}) => {
  return (
		<div>
			<div className="offerContainer">
				<div className="offerText">{offer}</div>
				<div>
					<button className="whiteButton">Shop Now</button>
				</div>
			</div>
		</div>
	);
}

export default OfferBanner
