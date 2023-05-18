import React from 'react'
import VerticalBar from './generalPartials/VerticalBar'

const PopupCircle = ({ onClose, handleLogout }) => {
  return (
    <div className="popup-container" onClick={onClose}>
      <div className="circle-3">
        <div className="circle-4">
          <VerticalBar />
          <div className="logout-text">Are you sure you want to sign out?</div>
          <button className="logout-button" onClick={handleLogout}>
            SURE
          </button>
          <button className='cancel-button'>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopupCircle