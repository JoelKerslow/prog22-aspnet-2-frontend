const StarRatingInput = ({ rating, onStarClick, disabled }) => {
  const handleClick = (value) => {
    if (!disabled) {
      onStarClick(value)
    }
  }

  return (
    <div className='star-rating-input'>
      {[1, 2, 3, 4, 5].map((value) => (
        <i
          key={value}
          onClick={() => handleClick(value)}
          className={`fa-sharp fa-star mx-1 my-3 ${
            value <= rating ? "star-selected" : "fa-solid"
          }`}
        ></i>
      ))}
    </div>
  )
}


export default StarRatingInput
