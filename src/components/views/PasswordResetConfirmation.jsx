//imports
import BackArrow from "../partials/generalPartials/BackArrow";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { useContext, useRef, useState } from "react";
import CircleWithIcon from "../partials/generalPartials/CircleWithIcon";
import VerticalBar from "../partials/generalPartials/VerticalBar";

const PasswordResetConfirmation = () => {
  const { loginUser, setUserLoggedin } = useContext(AuthorizationContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleClick = async () => {
    //await loginUser(emailRef.current.value, passwordRef.current.value);
    //setUserLoggedin(true);
    navigate("/ResetPassword");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <div className="stacked">
                <div className="maneroLogoRectangle"></div>
                <h2>MANERO</h2>
              </div>
            </div>
            <div className="ResetPassword-container">
              <CircleWithIcon iconName={"fa-key"} />
              <VerticalBar/>

              <h3>Your password has been reset!</h3>

              <div className="ForgotPasswordText">
                Click "DONE" to go to next page and enter a new password.
              </div>
            </div>
            {/* Fixa till så att maneroLogoRectangle blir ifylld, genom parentclass */}

            <div>
              <button
                className="BigBlackButton"
                onClick={() => {
                  handleClick();
                }}
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PasswordResetConfirmation;
