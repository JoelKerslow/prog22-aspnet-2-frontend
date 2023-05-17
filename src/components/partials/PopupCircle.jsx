import React from 'react'

const PopupCircle = () => {
  return (
    <div className="Onboarding-Container">
      <div className="circle-3">
        <div className="circle-4">
          <VerticalBar />
          <div className="welcome-text">{texts[textVersion].welcome}</div>
          <div className="subtext">{texts[textVersion].subtext}</div>
          <button className="get-started-btn" onClick={handleButtonClick}>
            Get started
          </button>
          <NavLink to="/Signin"></NavLink>
          <PageIndicator currentPage={currentPage} />
        </div>
      </div>
    </div>
  )
}

export default PopupCircle