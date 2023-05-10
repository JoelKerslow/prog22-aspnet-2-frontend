import React from 'react'

const SideBarContact = ({sidebarRef, toggleSideBar}) => {
  return (
    <div className="sidebar-overlay">
          <div className="sidebar-container" ref={sidebarRef}>
            <button className="close-button" onClick={ () => toggleSideBar()}>
              &times;
            </button>
            <h1>Contact us</h1>
            <ul>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
  )
}

export default SideBarContact