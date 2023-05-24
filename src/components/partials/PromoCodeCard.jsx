import React from "react";
import ShowcaseImage from "../../assets/images/showcase.png";

const PromoCodeCard = ({ item }) => {
  return (
    <div className="PromoCodeCard-item">
      <div className="PromoCode-placeholder"></div>

      <div className="PromoCodeCard-content">
        <div className="PromoCodeCard-title">Acme Co.</div>
        <div className="PromoCodeCard-discount">50% off</div>

        <div className="PromoCodeCard-expiry">Valid until June 30, 2024</div>
      </div>
    </div>
  );
};

export default PromoCodeCard;