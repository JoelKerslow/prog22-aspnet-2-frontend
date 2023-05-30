import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { AuthorizationContext } from "../../../contexts/AuthorizationContext";

const SocialMedia = () => {
  const { googleLogin } = useContext(AuthorizationContext);

  const onGoogleSuccess = (response) => {
    console.log(response);
    googleLogin(response.credential);
  };

  const onGoogleError = () => {
    console.log('Google login failed');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="SocialMediaClass">
          <div className="social-icon">
            <i className="fab fa-facebook-f fa-2x"></i>
          </div>
          <div className="social-icon">
            <i className="fab fa-twitter fa-2x"></i>
          </div>
          <div className="social-icon">
            <GoogleLogin
              clientId="459344649179-np0o2klbr29dmv02l0tbdmvh3grh2l4p.apps.googleusercontent.com"
              onSuccess={onGoogleSuccess}
              onError={onGoogleError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
