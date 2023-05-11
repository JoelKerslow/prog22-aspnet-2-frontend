//imports
import BackArrow from '../partials/generalPartials/BackArrow'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const VerificationCode = () => {
  const [inputValues, setInputValues] = useState(Array(5).fill(''))

  function handleInput(event, index) {
    const value = event.target.value.trim()
    if (value.length === 1 && !isNaN(value)) {
      const newInputValues = [...inputValues]
      newInputValues[index] = value
      setInputValues(newInputValues)
    }
  }

  return (
    <>
      <div className="RegHeader">
        <BackArrow />
        <h3>Verify your phone number</h3>
      </div>
      <div className="mycirclecontainer">
        <h2 className="text-center my-4">Enter your OTP here.</h2>

        <form method="post">
          <div className="cirleOTP-container">
            {inputValues.map((value, index) => (
              <div className={`circleOTP ${value ? 'filled' : ''}`} key={index}>
                <input
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleInput(e, index)}
                />
              </div>
            ))}
          </div>
          <button className="BigBlackButton" type="submit">
            Verify
          </button>
        </form>

        <p className="text-center my-2">
          Didn't receive the OTP? <Link to="/NumberReg">Resend.</Link>
        </p>
      </div>
    </>
  )
}

export default VerificationCode
