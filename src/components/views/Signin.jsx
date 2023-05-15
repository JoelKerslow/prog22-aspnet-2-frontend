//imports
import BackArrow from "../partials/generalPartials/BackArrow";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import SocialMedia from "../partials/generalPartials/SocialMedia";
import InputBox from "../partials/generalPartials/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { useContext, useRef, useState } from "react";

const SignIn = () => {
  const { loginUser } = useContext(AuthorizationContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async () => {
    await loginUser(emailRef.current.value, passwordRef.current.value);
  };
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Sign in</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Sign in</h2>
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
                  <label>Password</label>
                  <input
                    type="Password"
                    className="input-field"
                    placeholder="Enter your password here"
                    ref={passwordRef}
                  />
                </div>
                <button
                  className="BigBlackButton"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Sign in
                </button>
              </div>
            <p className="text-center my-2">
              Don't have an account? <Link to="/Signup">Sign up</Link>
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;