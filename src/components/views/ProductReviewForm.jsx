import { ProductContext } from "../../contexts/ProductContext"
import { useEffect, useContext, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import VerticalBar from "../partials/generalPartials/VerticalBar"
import BackArrow from "../partials/generalPartials/BackArrow"
import CircleWithIcon from "../partials/generalPartials/CircleWithIcon"
import StarRatingInput from "../partials/StarRatingInput"

const ProductReviewForm = () => {
  const { currentProduct, createProductReview } = useContext(ProductContext)
  const [rating, setRating] = useState(0)
  const [ratingError, setRatingError] = useState()
  const [serverError, setServerError] = useState()
  const navigate = useNavigate()
  const commentVal = useRef()

  //TODO: Check if user is logged in, otherwise redirect
  // useEffect(() => {
  // navigate(-1)
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    setRatingError(null)
    setServerError(null)

    if (rating === 0) {
      setRatingError("Please select a rating")
      return
    }

    const comment = commentVal.current.value.replace(/\s+/g, " ").trim()

    createProductReview(currentProduct.id, rating, comment)
      .then(() => {
        // Review created successfully
        // TODO: Show success message to the user
        console.log("Review created successfully")
      })
      .catch((error) => {
        // Server error occurred
        setServerError(
          "An error occurred while creating the review. Please try again later."
        )
      })
  }

  const handleStarClick = (value) => {
    setRating(value)
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
          <div className='RegHeader'>
            <BackArrow />
            <h3>Leave a review</h3>
          </div>
          <CircleWithIcon iconClassName={"fa-comments"} />
          <VerticalBar />

          <h3 className='text-center fw-bold'>
            Please let us know how satisfied you were with your product!
          </h3>

          <form onSubmit={handleSubmit} method='post' className='form-review'>
            <StarRatingInput rating={rating} onStarClick={handleStarClick} />
            {ratingError && (
              <p className='text-danger text-center'>{ratingError}</p>
            )}
            <p className='text-center py-2 mx-2'>
              Your comments and suggestions help us improve the service quality
              better!
            </p>
            <div className='input-field-group my-4'>
              <label>COMMENT</label>
              <textarea
                ref={commentVal}
                maxLength={120}
                className='input-field'
                placeholder='Enter your comment'
              ></textarea>
            </div>
            {serverError && (
              <div class='alert alert-danger' role='alert'>
                Something went wrong. Please try again later
              </div>
            )}
            <button className='BigBlackButton mt-5' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductReviewForm
