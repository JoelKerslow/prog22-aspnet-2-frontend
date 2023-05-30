import { useState } from "react";
import { useRef } from "react";
import BackArrow from "../partials/generalPartials/BackArrow";
import { useNavigate } from "react-router-dom";
import VerticalBar from "../partials/generalPartials/VerticalBar";
import CircleWithIcon from "../partials/generalPartials/CircleWithIcon";

const MyPromocodesEmpty = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const voucherRef = useRef();


  const handleGoBack = () => {
    navigate(-1)
	};

    const handleSubmit = async () => {
      if (voucherRef.current.value === "") {
        return setError("Voucher field is empty");
      }

      if (voucherRef.current.value === "Promocode2023"){
        navigate("/MyPromocodes");
      } else {
        setError("That's not a valid voucher code.")
      }

    };





  return (
    <div className="promocodes-wrapper">
      <div className="promo-header">
        <BackArrow clickEvent={handleGoBack} />
        <h3>My Promocodes</h3>
      </div>

      <div className="col-12 col-sm-8 col-md-6 col-lg-4">

      <div className="promocodesEmpty-container">
        <div className="CircleWithIconDiv">
          <CircleWithIcon
            iconName="fa-ticket-simple"
            rotation={135}
            innerText="%"
          />
        </div>
        <VerticalBar />

        <h2 className="text-center my-4 mx-5">You don't have any promocodes yet!</h2>

        <div className="input-field-group">
          <label>ENTER THE VOUCHER</label>
          <input
            type="Name"
            className="input-field"
            placeholder="Enter voucher here..."
            ref={voucherRef}

          />
        </div>

        <div className="input-field-group">
          <button className="BigBlackButton" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>



      </div>

    </div>
  );
};

export default MyPromocodesEmpty;