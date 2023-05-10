//imports
import BackArrow from "./GeneralPartials/BackArrow";
import VerticalBar from "./GeneralPartials/VerticalBar";
import SocialMedia from "./GeneralPartials/SocialMedia";
import InputBox from "./GeneralPartials/InputBox";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { useContext, useRef, useState } from "react";

const Login = () => {

  // const { signIn } = useContext(AuthContext);
  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try{
  //     await signIn(emailRef.current.value, passwordRef.current.value);
  //   }catch{

  //   }
  // }

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
            <form method="post" onSubmit="{handleLogin}">
              <div className="form-container">
                <input
                  type="Email"
                  className="input-field"
                  placeholder="Email"
                />
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Password"
                />
                <button className="BigBlackButton" type="submit">
                  Sign in
                </button>
              </div>
            </form>
            <p className="text-center my-2">
              Don't have an account? <a to="/Register">Sign up</a>
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
