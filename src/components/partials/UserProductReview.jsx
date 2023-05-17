import React from 'react'
import StarRating from './StarRating'

const UserProductReview = () => {
  return (
    <div className='reviewCard'>
      <div className='cardHeader'>
        <div className='profileImg'></div>
        <div className='nameAndDate'>
          <div className='profileName'>Anders Jansson</div>
          <div className='reviewDate'>23 jan 2022</div>
        </div>
        <div className='reviewStarRating'><StarRating /></div>
      </div>

      <div className='reviewText'>Consequat ut ea dolor laborom tempor Lorem culpa. Commodo veniam sint est mollit prodient commodo</div>
    </div>
  )
}

{/* <img className='faceImg' src='https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'></img> */}
export default UserProductReview
