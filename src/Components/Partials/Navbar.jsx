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
      {/* Dessa länkar måste ändras, för tillfället är de placeholders //Henrik */}
      <Link to="/Verification">
        <FontAwesomeIcon
        className='fa-lg'
          icon={faHouse}
          style={{ color: location.pathname === '/Verification' ? activeColor : inactiveColor }}
        />
      </Link>
      <Link to="/search">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: location.pathname === '/search' ? activeColor : inactiveColor }}
        />
      </Link>
      <Link to="/">
        <FontAwesomeIcon
          icon={faBagShopping}
          style={{ color: location.pathname === '/' ? activeColor : inactiveColor }}
        />
      </Link>
      <Link to="/Onboarding">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: location.pathname === '/Onboarding' ? activeColor : inactiveColor }}
        />
      </Link>
      <Link to="/Verification">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: location.pathname === '/Verifictaion' ? activeColor : inactiveColor }}
        />
      </Link>
    </div>
  );
};

export default Navbar;

