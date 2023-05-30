const CircleWithIcon = ({ size, theme, iconStyle, iconName, rotation, innerText }) => {

  const  style = rotation ? { transform: `rotate(${rotation}deg)`} : {};
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className={`circle-with-icon ${size} ${theme}`}>
        <i
          className={`${iconStyle ? iconStyle : "fa-regular"} ${iconName} icon`} style={style}>
        </i>
        <div className="CircleWithIcon-text">{innerText}</div>
      </div>
    </div>
  );
}

export default CircleWithIcon
