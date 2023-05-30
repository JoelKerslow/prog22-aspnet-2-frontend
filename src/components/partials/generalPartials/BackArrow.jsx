//Denna component är för backbutton "<", som används på många olika sidor, därför ingen egen partial.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const BackArrow = ({clickEvent}) => {
  return (
    <div className="backArrow" onClick={() => { clickEvent() }}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  )
}

export default BackArrow


//Så här skulle man kunna lägga all logik i BackArrow, 
//men undveks pga risk att förstöra andra redan skapade funktionalieter.

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// import React from 'react'
// import { useNavigate } from "react-router-dom";

// const BackArrow = () => {
//   const navigate = useNavigate();
  
//   const handleGoBack = () => {
//     navigate(-1)
//   };

//   return (
//     <div className="backArrow" onClick={handleGoBack}>
//       <FontAwesomeIcon icon={faChevronLeft} />
//     </div>
//   )
// }

// export default BackArrow

