import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductReviewSiteHead = ( {text}) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='reviewHeader'>
        <button className='backButton' onClick={() => navigate(-1)}><i className="fa-regular fa-chevron-left"></i></button>
        <div className='headerText'>{text}</div>
      </div>
    </div>
  )
}

export default ProductReviewSiteHead
