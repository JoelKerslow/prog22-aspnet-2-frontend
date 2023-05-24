//imports
import BackArrow from "../partials/generalPartials/BackArrow";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizationContext } from "../../contexts/AuthorizationContext";
import { useContext, useRef, useState } from "react";
import PromoCodeCard from "../partials/PromoCodeCard";

const MyPromocodes = () => {
  return (
    <>
      <div className="RegHeader">
        <BackArrow />
        <h3>My Promocodes</h3>
      </div>
      <div>
        <PromoCodeCard />
        <PromoCodeCard />
        <PromoCodeCard />
      </div>
    </>
  );
};

export default MyPromocodes;
