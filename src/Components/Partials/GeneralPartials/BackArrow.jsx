//Denna component är för backbutton "<", som används på många olika sidor, därför ingen egen partial.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const BackArrow = () => {
  return (
    <div className="backArrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  )
}

export default BackArrow
