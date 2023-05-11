import React from "react";

const SocialMedia = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* <div className="col-8 d-flex justify-content-evenly align-items-center"> */}
        <div className="SocialMediaClass">
          
          <div className="social-icon">
            <i className="fab fa-facebook-f fa-2x"></i>
          </div>
          <div className="social-icon">
            <i className="fab fa-twitter fa-2x"></i>
          </div>
          <div className="social-icon">
            <i className="fab fa-google fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
