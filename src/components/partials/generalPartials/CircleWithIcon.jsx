const CircleWithIcon = ({ size, theme, iconClassName }) => {
  return (
    <div className='d-flex justify-content-center mb-3'>
      <div className={`circle-with-icon ${size} ${theme}`}>
        <i className={`fa-regular ${iconClassName}`}></i>
      </div>
    </div>
  )
}

export default CircleWithIcon
