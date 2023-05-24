//imports
import BackArrow from "../partials/generalPartials/BackArrow";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { useContext, useRef, useState } from "react";

const ResetPassword = () => {
  const { loginUser, setUserLoggedin } = useContext(AuthorizationContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/Signin");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Reset Password</h3>
            </div>
            <div className="ResetPassword-container">
              <div className="ForgotPasswordText">
                Enter new password and confirm.
              </div>
            </div>

            <div>
              <div className="input-field-group">
                <label>NEW PASSWORD</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Enter your password here"
                  ref={passwordRef}
                />
              </div>

              <div className="input-field-group">
                <label>CONFIRM PASSWORD</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Confirm your password here"
                  ref={passwordRef}
                />
              </div>

              <div className="input-field-group">
                <button
                  className="BigBlackButton"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  CHANGE PASSWORD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
