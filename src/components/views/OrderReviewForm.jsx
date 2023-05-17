import { AuthorizationContext } from "../../contexts/AuthorizationContext"
import { useEffect, useContext, useState, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import VerticalBar from "../partials/generalPartials/VerticalBar"
import BackArrow from "../partials/generalPartials/BackArrow"
import CircleWithIcon from "../partials/generalPartials/CircleWithIcon"
import StarRatingInput from "../partials/StarRatingInput"

const OrderReviewForm = () => {
  const { userLoggedin } = useContext(AuthorizationContext)
  const { orderId } = useParams()

  const [rating, setRating] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [ratingError, setRatingError] = useState()
  const [serverError, setServerError] = useState()

  const navigate = useNavigate()
  const commentVal = useRef()

  const orderReviewsUrl = "https://aspnet2-grupp1-backend.azurewebsites.net/Review"
  const apiKey = "f77ca749-67f4-4c22-9039-137272442ea0"

  useEffect(() => {
    if (!userLoggedin) {
      navigate('/Signin')
    }
  }, [userLoggedin])

  const createOrderReview = async () => {
    const comment = commentVal.current.value.replace(/\s+/g, " ").trim()

    const reviewData = {
      comment: comment || null,
      rating: rating,
      orderId: orderId,
    }

    const result = await fetch(orderReviewsUrl, {
      method: "POST",
      headers: {
        "API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        if (res.ok) {
          return true
        }

        return false
      })
      .catch((err) => {
        console.error(err.message)
        return false
      })

    return result
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formSubmitted) {
      return
    }

    setRatingError(null)
    setServerError(null)

    if (rating === 0) {
      setRatingError("Please select a rating")
      return
    }

    if (await createOrderReview()) {
      setFormSubmitted(true)
    } else {
      setServerError(
        "Something went wrong submitting your review. Please try again later"
      )
    }
  }

  const handleStarClick = (value) => {
    setRating(value)
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
          <div className='RegHeader'>
            <BackArrow clickEvent={handleGoBack} />
            <h3>Leave a review</h3>
          </div>
          <CircleWithIcon iconClassName={"fa-comments"} />
          <VerticalBar />

          <h3 className='text-center fw-bold'>
            Please rate the quality of service for the order!
          </h3>

          <form onSubmit={handleSubmit} method='post' className='form-review'>
            <StarRatingInput
              rating={rating}
              onStarClick={handleStarClick}
              disabled={formSubmitted}
            />

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
                disabled={formSubmitted}
              ></textarea>
            </div>

            {serverError && (
              <div className='alert alert-danger text-center' role='alert'>
                {serverError}
              </div>
            )}

            {formSubmitted && (
              <div className='alert alert-success text-center' role='alert'>
                Your review has been successfully submitted, thank you for your
                feedback!
              </div>
            )}

            {formSubmitted ? (
              <button
                className='BigBlackButton mt-5 mb-2'
                onClick={handleGoBack}
              >
                Go back
              </button>
            ) : (
              <button className='BigBlackButton mt-5 mb-2' type='submit'>
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderReviewForm
