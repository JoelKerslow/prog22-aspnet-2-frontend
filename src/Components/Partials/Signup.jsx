//imports
import SocialMedia from './GeneralPartials/SocialMedia'
import BackArrow from "./GeneralPartials/BackArrow";
import VerticalBar from "./GeneralPartials/VerticalBar";
// import { Link, useNavigate } from "react-router-dom";
// import { DataContext } from "../../Contexts/DataContext";
// import { useContext, useRef, useState } from "react";

const Registration = () => {
  // const { signup } = useContext(DataContext);
  // const fullNameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const confirmPasswordRef = useRef();

  // const handleRegistration = async (e) => {
  //   console.log("i handle metoden");
  //   e.preventDefault();
  //   if (passwordRef.current.value !== confirmPasswordRef.current.value) {
  //     return false;
  //   } else {
  //     const nameArray = fullNameRef.current.value.split(" ");
  //     try {
  //       console.log(
  //         "success regwindow metod" + " " + nameArray[0] + nameArray[1]
  //       );
  //       await signup(
  //         nameArray[0],
  //         nameArray[1],
  //         emailRef.current.value,
  //         passwordRef.current.value,
  //         "+46123456789"
  //       );
  //       console.log("success regwindow metod #2");
  //     } catch {}
  //   }
  // };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow />
              <h3>Sign up</h3>
            </div>

            <VerticalBar />
            <h2 className="text-center my-4">Sign up</h2>

            <form onSubmit="" method="post">
              <div className="input-field-group">
                <label>Name</label>
                <input
                  type="Name"
                  className="input-field"
                  placeholder="Name"
                />
              </div>
              <div className="input-field-group">
                <label>Email</label>
                <input
                  type="Email"
                  className="input-field"
                  placeholder="Email"
                />
              </div>
              <div className="input-field-group">
                <label>Password</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Password"
                />
              </div>
              <div className="input-field-group">
                <label>Confirm Password</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Confirm
                Password"
                />
              </div>

              <button className="BigBlackButton" type="submit">
                Sign Up
              </button>
            </form>

            <p className="text-center my-2">
              Already have an account? <a to="/Login">Sign in</a>
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;