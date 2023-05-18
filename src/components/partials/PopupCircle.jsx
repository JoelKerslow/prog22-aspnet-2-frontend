import React from 'react'
import VerticalBar from './generalPartials/VerticalBar'

const PopupCircle = ({ onClose }) => {
  return (
    <div className="popup-container" onClick={onClose}>
      <div className="circle-3">
        <div className="circle-4">
          <VerticalBar />
          <div className="logout-text">Are you sure you want to sign out?</div>
          <button className="logout-button">
            SURE
          </button>
          <button className='cancel-button'>
            CANCEL
          </button>
          {/* <NavLink to="/Signin"></NavLink> */}
        </div>
      </div>
    </div>
  )
}

export default PopupCircle