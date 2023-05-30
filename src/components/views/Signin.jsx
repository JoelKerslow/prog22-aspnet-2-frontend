//imports
import BackArrow from '../partials/generalPartials/BackArrow'
import VerticalBar from '../partials/generalPartials/VerticalBar'
import SocialMedia from '../partials/generalPartials/SocialMedia'
import { Link, useNavigate } from 'react-router-dom'
import { AuthorizationContext } from '../../contexts/AuthorizationContext'
import { UserContext } from '../../contexts/UserContext'
import { useContext, useRef, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const SignIn = () => {
  const [error, setError] = useState('')
  const { loginUser, authorize } = useContext(AuthorizationContext)
  const { getLoggedinUser } = useContext(UserContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const rememberMeRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthentication = async () => {
      if (await authorize()) {
        navigate('/Profile')
      }
    }

    const checkRememberMe = () => {
      const rememberMeToken = Cookies.get('rememberMe')
      if (rememberMeToken != null) {
        emailRef.current.value = rememberMeToken
        rememberMeRef.current.checked = true
      }
    }

    checkAuthentication()
    checkRememberMe()
  }, [])

  const handleLogin = async () => {
    var result = await loginUser(
      emailRef.current.value,
      passwordRef.current.value
    )
    if (result === true) {
      var result = await getLoggedinUser()
      navigate('/Profile')
    } else {
      setError('Failed to login')
    }
  }

  const handleRememberMeChange = () => {

    if (rememberMeRef.current.checked) {
      const expirationDate = new Date()
      console.log(expirationDate.getFullYear() + 1)

      Cookies.set('rememberMe', emailRef.current.value, {
        expires: expirationDate.getFullYear() + 1,
      })
    } else {
      Cookies.remove('rememberMe')
    }
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="RegHeader">
              <BackArrow clickEvent={handleGoBack} />
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

              <div className="RememberMe-flexbox">
                <div>
                  <input
                    ref={rememberMeRef}
                    type="checkbox"
                    className="RememberMeCB"
                    onChange={handleRememberMeChange}
                  ></input>
                  <label className="RememberMelbl">Remember me</label>
                </div>
                <Link to="/ForgotPassword">Forgot password?</Link>
                {error && <div className="error-text">{error}</div>}
              </div>
              <div className="input-field-group">
                <button
                  className="BigBlackButton"
                  onClick={() => {
                    handleLogin()
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>

            <p className="text-center my-2">
              Don't have an account? <Link to="/Signup">Sign up</Link>
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  )
}
export default SignIn
