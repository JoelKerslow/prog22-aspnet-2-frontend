import React, { useContext, useEffect, useState } from 'react'
import Header from '../partials/Header'
import VerticalBar from '../partials/generalPartials/VerticalBar'
import ProfilePicture from '../partials/generalPartials/ProfilePicture'
import Navbar from '../partials/Navbar'
import PopupCircle from '../partials/PopupCircle'
import { Link, useNavigate } from 'react-router-dom'
import { AuthorizationContext } from '../../contexts/AuthorizationContext'
import { UserContext } from '../../contexts/UserContext'
import { OrderContext } from '../../contexts/OrderContext'

const ProfilePage = () => {
  const { logoutUser, useAuthorization } = useContext(AuthorizationContext)
  const { fetchOrders } = useContext(OrderContext);

  useAuthorization()

  useEffect(() => {
    fetchOrders();
  },[])

  const { currentUser } = useContext(UserContext)
  const [promocodeClickCount, setPromocodeClickCount] = useState(0)

  const navigate = useNavigate()

  const [togglePopup, setTogglePopup] = useState(false)

  const handlePromocodeClick = () => {
    // Handles localStorage for Promocodes for DEMO purposes.
    const currentCount = localStorage.getItem('promocodeClickCount')
      ? parseInt(localStorage.getItem('promocodeClickCount'))
      : 0

    const newCount = currentCount + 1

    localStorage.setItem('promocodeClickCount', newCount)

    if (newCount === 1) {
      navigate('/MyPromocodesEmpty')
    } else {
      navigate('/MyPromocodes')
    }
  }

  const handleLogout = () => {
    logoutUser()
    navigate('/Signin')
  }

  return (
    <>
      {togglePopup && (
        <div className="popup-overlay" onClick={() => setTogglePopup(false)} />
      )}
      {togglePopup && (
        <PopupCircle
          onClose={() => setTogglePopup(false)}
          handleLogout={() => handleLogout()}
        />
      )}
      <div>
        <Header headerContent={<h1>MANERO</h1>} showCartButton={true} />
        <div className="container">
          <div className="container mt-3">
            <VerticalBar />
            <div className="mt-3">
              <ProfilePicture
                className={'fa-pen-line'}
                event={() => navigate('/EditProfile')}
              />
            </div>
            <div className="profile-info text-center">
              <h2>
                {currentUser.firstName} {currentUser.lastName}
              </h2>
              <p>{currentUser.email}</p>
            </div>
          </div>

          <ul className="list-group mt-5">
            <Link to="/OrderHistory" className="list-group-item pt-3 pb-1">
              <div className="options-icon">
                <i className="fa-light fa-calendar"></i>
              </div>
              <div className="options-text">
                <p>Order history</p>
              </div>
              <div className="options-arrow">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </Link>

            <Link
              to="/Profile/PaymentMethods"
              className="list-group-item pt-3 pb-1"
            >
              <div className="options-icon">
                <i className="fa-light fa-credit-card-front"></i>
              </div>
              <div className="options-text">
                <p>Payment method</p>
              </div>
              <div className="options-arrow">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </Link>

            <Link to="/Profile/Addresses" className="list-group-item pt-3 pb-1">
              <div className="options-icon">
                <i className="fa-sharp fa-light fa-location-dot"></i>
              </div>
              <div className="options-text">
                <p>My address</p>
              </div>
              <div className="options-arrow">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </Link>

            {/* <Link to="/MyPromocodesEmpty" className="list-group-item pt-3 pb-1"> */}
            <div
              onClick={handlePromocodeClick}
              className="list-group-item pt-3 pb-1"
            >
              <div className="options-icon">
                <i className="fa-light fa-gift"></i>
              </div>
              <div className="options-text">
                <p>My promocodes</p>
              </div>
              <div className="options-arrow">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </div>

            <li
              onClick={() => setTogglePopup(true)}
              className="list-group-item pt-3 pb-1 "
            >
              <div className="options-icon">
                <i className="fa-light fa-arrow-right-from-bracket text-decoration-none"></i>
              </div>
              <div className="options-text option-signout">
                <p>Sign out</p>
              </div>
              <div className="options-arrow">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-navbar">
        <Navbar />
      </div>
    </>
  )
}

export default ProfilePage
