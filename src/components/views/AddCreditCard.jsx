import { useState } from "react";
import { useNavigate } from "react-router-dom";
import creditCardImage from "../../assets/images/creditcard.png";
import BackArrow from "../partials/generalPartials/BackArrow";
import VerticalBar from "../partials/generalPartials/VerticalBar";

const AddCreditCard = () => {
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const navigate = useNavigate();

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    
    
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
        <div className="RegHeader">
              <BackArrow />
              <h3>Add credit card</h3>
            </div>
            <VerticalBar />
              <div className="credit-card">
                <div className="card-number">{cardNumber}</div>
                <div className="card-holder">{fullName}</div>
                <div className="expiration-date">{expiryDate}</div>
              </div>

          <form onSubmit={handleOnSubmit} method="post" className="form-addcreditcard">
            <div className="add-credit-card-input input-field-group">
              <label>Full name</label>
              <input
                type="text"
                className="input-field"
                placeholder="John Doe"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="add-credit-card-input input-field-group">
              <label>Card number</label>
              <input
                type="text"
                className="input-field"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div className="add-credit-card-input input-field-group">
              <label>Expiry date</label>
              <input
                type="text"
                className="input-field"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
            <div className="add-credit-card-input input-field-group">
              <label>CVC</label>
              <input
                type="text"
                className="input-field"
                placeholder="123"
                value={cvc}
                onChange={handleCvcChange}
              />
            </div>
            <button className="BigBlackButton" type="submit">Save Card</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCreditCard;