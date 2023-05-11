import React from 'react'

const ManeroLogo = ({ onClick }) => {
  return (
    <div className="ManeroLogoClass" onClick={onClick}>
      <div className="circle-1">
        <div className="circle-2">
          <div className="maneroLogoRectangle"></div>
          <p className="maneroLogoText">MANERO</p>
        </div>
      </div>
    </div>
  )
}

export default ManeroLogo
