import React from 'react'
import ManeroLogo from '../partials/generalPartials/ManeroLogo'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    //This is to reset local storage for promocodes for Demo Purposes.
    localStorage.setItem('promocodeClickCount', 0)
    navigate('/Onboarding')
  }

  return (
    <div className="Welcome-Container">
      <div>
        <ManeroLogo onClick={handleLogoClick} />
      </div>
    </div>
  )
}

export default Welcome
