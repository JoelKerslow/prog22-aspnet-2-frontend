import React from 'react'
import StarRating from './StarRating'

const UserProductReview = ({ review }) => {
  const newDate = new Date(review.createdDate);
  const reviewDate = `${newDate.getDate()} ${newDate.toLocaleString('default', { month: 'long' })} ${newDate.getFullYear()} `

	return (
		<div className="reviewCard">
			<div className="cardHeader">
				<div className="profileImg">{review.imageUrl === null ? <img className='faceImg' alt="placeholder" src='https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'></img> : review.imageUrl}</div>
				<div className="nameAndDate">
					<div className="profileName">{`${review.customerFirstName + " " + review.customerLastName}`}</div>
					<div className="reviewDate">{reviewDate}</div>
				</div>
				<div className="reviewStarRating">
					<StarRating rating={review.rating}/>
				</div>
			</div>

			<div className="reviewText">{review.comment}</div>
		</div>
	);
};

export default UserProductReview
