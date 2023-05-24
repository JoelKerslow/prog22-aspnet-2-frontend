const CircleWithIcon = ({ size, theme, iconStyle, iconName }) => {
  return (
    <div className='d-flex justify-content-center mb-3'>
      <div className={`circle-with-icon ${size} ${theme}`}>
        <i className={`${iconStyle ? iconStyle : "fa-regular" } ${iconName} icon`}></i>
      </div>
    </div>
  )
}

export default CircleWithIcon
