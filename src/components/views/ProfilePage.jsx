import React, { useContext, useEffect, useState } from "react";
import Header from "../partials/Header";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import ProfilePicture from "../partials/generalPartials/ProfilePicture";
import Navbar from "../partials/Navbar";
import PopupCircle from "../partials/PopupCircle";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { UserContext } from "../../contexts/UserContext";

const ProfilePage = () => {
  const { logoutUser, useAuthorization } = useContext(AuthorizationContext);
  useAuthorization()

  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [togglePopup, setTogglePopup] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/Signin");
  };

  return (
    <>
      {togglePopup && (<div className="popup-overlay" onClick={() => setTogglePopup(false)} />)}
      {togglePopup && <PopupCircle onClose={() => setTogglePopup(false)} handleLogout={() => handleLogout()} />}
     <div>
      <Header />
      <div className="container">
        <div className="container mt-3">
          <VerticalBar />
          <div className="mt-3">
            <ProfilePicture className={'fa-pen-line'} event={() => navigate("/EditProfile")} />
          </div>
          <div className="profile-info text-center">
            <h2>{currentUser.firstName} {currentUser.lastName}</h2>
            <p>{currentUser.email}</p>
          </div>
        </div>

        <ul className="list-group mt-5">

          <Link to="/OrderHistory" className="list-group-item pt-3 pb-1">
            <div className="options-icon">
              <i class="fa-light fa-calendar"></i>
            </div>
            <div className="options-text">
              <p>Order history</p>
            </div>
            <div className="options-arrow">
              <i class="fa-light fa-chevron-right"></i>
            </div>
          </Link>

          <Link to="/Profile/PaymentMethods" className="list-group-item pt-3 pb-1">
            <div className="options-icon">
              <i class="fa-light fa-credit-card-front"></i>
            </div>
            <div className="options-text">
              <p>Payment method</p>
            </div>
            <div className="options-arrow">
              <i class="fa-light fa-chevron-right"></i>
            </div>
          </Link>

          <Link to="/Profile/Addresses" className="list-group-item pt-3 pb-1">
            <div className="options-icon">
              <i class="fa-sharp fa-light fa-location-dot"></i>
            </div>
            <div className="options-text">
              <p>My address</p>
            </div>
            <div className="options-arrow">
              <i class="fa-light fa-chevron-right"></i>
            </div>
          </Link>

          <Link to="/Promocodes" className="list-group-item pt-3 pb-1">
            <div className="options-icon">
              <i class="fa-light fa-gift"></i>
            </div>
            <div className="options-text">
              <p>My promocodes</p>
            </div>
            <div className="options-arrow">
              <i class="fa-light fa-chevron-right"></i>
            </div>
          </Link>

          <li onClick={() => setTogglePopup(true)} className="list-group-item pt-3 pb-1 ">
            <div className="options-icon">
              <i class="fa-light fa-arrow-right-from-bracket text-decoration-none"></i>
            </div>
            <div className="options-text">
              <p>Sign out</p>
            </div>
            <div className="options-arrow">
              <i class="fa-light fa-chevron-right"></i>
            </div>
          </li>

        </ul>
        <div className="profile-navbar">
          <Navbar />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
