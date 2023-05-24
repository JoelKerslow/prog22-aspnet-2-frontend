//imports
import SocialMedia from '../partials/generalPartials/SocialMedia';
import BackArrow from '../partials/generalPartials/BackArrow';
import VerticalBar from '../partials/generalPartials/VerticalBar';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthorizationContext } from '../../contexts/AuthorizationContext';

const Signup = () => {
  const [error, setError] = useState('');
  const { registerUser } = useContext(AuthorizationContext);
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const handleRegistration = async () => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try{
      setError('');
      await registerUser(fullNameRef.current.value, emailRef.current.value, passwordRef.current.value);
      navigate("/Signin");
    }catch{
      setError('Failed to create an account');
    }
  };

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
              <div className="input-field-group">
                <label>Name</label>
                <input
                  type="Name"
                  className="input-field"
                  placeholder="John Doe"
                  ref={fullNameRef}
                />
              </div>
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
              <div className="input-field-group">
                <label>Confirm Password</label>
                <input
                  type="Password"
                  className="input-field"
                  placeholder="Enter your password here"
                  ref={confirmPasswordRef}
                />
              </div>

              {error &&  <div className='error-text'>{error}</div> }
              <div className="input-field-group">
              <button className="BigBlackButton" onClick={handleRegistration}>
                Sign Up
              </button>
              </div>

            <p className="text-center my-2">
              Already have an account? <Link to={"/Signin"}>Sign in</Link>
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
