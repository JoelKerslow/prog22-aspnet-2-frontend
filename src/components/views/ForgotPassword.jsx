//imports
import BackArrow from "../partials/generalPartials/BackArrow";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { useContext, useRef, useState } from "react";

const ForgotPassword = () => {
  const { loginUser, setUserLoggedin } = useContext(AuthorizationContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleEmailSender = async () => {
    //await loginUser(emailRef.current.value, passwordRef.current.value);
    //setUserLoggedin(true);
    navigate("/PasswordResetConfirmation");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Forgot Password</h3>
            </div>
            <div className="ForgotPassworText-Container">
              <div className="ForgotPasswordText">
                Please enter your email address. You will receive a link to
                create a new password via email.
              </div>
            </div>

            <div>
              <div className="input-field-group">
                <label>Email</label>
                <input
                  type="Email"
                  className="input-field"
                  placeholder="Johndoe@gmail.com"
                  ref={emailRef}
                />
              </div>
              <div className="input-field-group">
                <button
                  className="BigBlackButton"
                  onClick={() => {
                    handleEmailSender();
                  }}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
