import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faMagnifyingGlass,
  faBagShopping,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="NavBarContainer">
      <FontAwesomeIcon icon={faHouse} style={{ color: '#626262' }} />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#626262' }} />
      <FontAwesomeIcon icon={faBagShopping} style={{ color: '#626262' }} />
      <FontAwesomeIcon icon={faHeart} style={{ color: '#626262' }} />
      <FontAwesomeIcon icon={faUser} style={{ color: '#626262' }} />
    </div>
  )
}

export default Navbar
