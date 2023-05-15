import React, { useContext } from "react";
import Header from "../partials/Header";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import ProfilePicture from "../partials/generalPartials/ProfilePicture";
import Navbar from "../partials/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";

const ProfilePage = () => {
  const { logoutUser } = useContext(AuthorizationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/Signin");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="container mt-2">
          <VerticalBar />
          <ProfilePicture />
          <div className="profile-info text-center">
            <h2>Namn på användare</h2>
            <p>email på användare</p>
          </div>
        </div>

        <ul className="list-group mt-5">

          <Link to="/Orders" className="list-group-item pt-3 pb-1">
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

          <Link to="/Payment" className="list-group-item pt-3 pb-1">
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

          <Link to="/Addresses" className="list-group-item pt-3 pb-1">
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

          <li onClick={handleLogout} className="list-group-item pt-3 pb-1 ">
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
    </>
    
  );
};

export default ProfilePage;
