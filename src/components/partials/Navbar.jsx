import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faBagShopping,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const activeColor = '$color-theme-2'; 
  const inactiveColor = '#626262';

  return (
    <div className="NavBarContainer">
      {/* Replace "/Onboarding" with link to "Home" (name to be decided/not yet implemented)*/}
      <Link to="/Onboarding">
        <FontAwesomeIcon
        className='fa-lg'
          icon={faHouse}
          style={{ color: location.pathname === '/Home' ? activeColor : inactiveColor }}
        />
      </Link>
      
      <Link to="/SearchProducts">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: location.pathname === '/SearchProducts' ? activeColor : inactiveColor }}
        />
      </Link>

      {/* Replace "/Onboarding" with link to "Shopping" (name to be decided/not yet implemented)*/}
      <Link to="/Onboarding">
        <FontAwesomeIcon
          icon={faBagShopping}
          style={{ color: location.pathname === '/Cart' ? activeColor : inactiveColor }}
        />
      </Link>

      {/* Replace "/Onboarding" with link to "Wishlist" (name to be decided/not yet implemented)*/}
      <Link to="/Onboarding">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: location.pathname === '/Wishlist' ? activeColor : inactiveColor }}
        />
      </Link>

      <Link to="/Profile">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: location.pathname === '/Profile' ? activeColor : inactiveColor }}
        />
      </Link>
    </div>
  );
};

export default Navbar;

