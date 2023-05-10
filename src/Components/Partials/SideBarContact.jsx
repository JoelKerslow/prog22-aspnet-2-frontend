import React from 'react'

const _SideBarContact = ({sidebarRef, toggleSideBar}) => {
  return (
    <div className="sidebar-overlay">
          <div className="sidebar-container" ref={sidebarRef}>
            <button className="close-button" onClick={ () => toggleSideBar()}>
              &times;
            </button>
            
            <h1>Contact us</h1>
            <div className='contact-div'>
              <div className='icon'>
                <i className="fa-light fa-location-dot fa-lg"></i>
              </div>
              <ul>
                <li>27 Division St, New York</li>
                <li>NY 10002, USA</li>
              </ul>
            </div>
            <div className='contact-div'>
              <div className='icon'>
                <i className="fa-light fa-envelope fa-lg"></i>
              </div>
              <ul>
                <li><a href='mailto: manerosale@mail.com'>manerosale@mail.com</a></li>
                <li><a href='mailto: manerosupport@mail.com'>manerosupport@mail.com</a></li>
              </ul>
            </div>
            <div className='contact-div'>
              <div className='icon'>
                <i className="fa-light fa-phone fa-lg"></i>
              </div>
              <ul>
                <li>+17 123456789</li>
                <li>+17 987654321</li>
              </ul>
            </div>

            <div className='order-tracking'>
              <label>
                <h6>Track your order</h6>
                  <div className='rounded-border'>
                    <button className='fa-solid fa-arrow-right'></button>
                    <input type="text" placeholder="Order number" />
                  </div>
              </label>
            </div>
          </div>
        </div>
  )
}

export default _SideBarContact