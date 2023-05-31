import React from "react";

const PromoCodeCard = ({ title, discount, expiry, used }) => {
  const discountPercentage = parseInt(discount);

  let discountColor;

  if (discountPercentage >= 50) {
    discountColor = "#F4303C";
  } else if (discountPercentage >= 30) {
    discountColor = "#EF962D";
  } else if (discountPercentage > 0) {
    discountColor = "#00824B";
  }

  const cardStyle = used 
    ? {opacity: "0.5", pointerEvents: "none"} 
    : {};
  
    const handleCopyClick = () =>{

      const stringToCopy = `${title.substring(0, 3).toUpperCase()}2023`;
  
      navigator.clipboard.writeText(stringToCopy)
      .then(() =>{
        console.log("Promocode copied to clipboard");
      })
      .catch(err =>{
        console.log("Could not copy promocode to clipboard", err)
      })
    }
    

  return (
    <div className="PromoCodeCard-item" style={cardStyle}>
      <div className="PromoCode-placeholder"></div>

      <div className="PromoCodeCard-content">
        <div className="PromoCodeCard-title">{title}</div>
        <div
          className="PromoCodeCard-discount"
          style={{ color: discountColor }}
        >
          {discount}% off
        </div>
        <div className="PromoCodeCard-expiry">{expiry}</div>
      </div>
      <div className="clone-icon-div" onClick={handleCopyClick}>
        <i
          className="fa-light fa-clone fa-rotate-90"
          style={{ color: "#626262" }}
        ></i>
      </div>
    </div>
  );
};

export default PromoCodeCard;






// import React from "react";



// const PromoCodeCard = ({title, discount, expiry }) => {

//   const discountPercentage = parseInt(discount);


//   let discountColor;


//     if (discountPercentage >= 50) {
//       discountColor = '#F4303C';
//     } else if (discountPercentage >= 30) {
//       discountColor = '#EF962D';
//     } else if (discountPercentage > 0) {
//       discountColor = "#00824B";
//     }




//   return (
//     <div className="PromoCodeCard-item">
//       <div className="PromoCode-placeholder"></div>

//       <div className="PromoCodeCard-content">
//         <div className="PromoCodeCard-title">{title}</div>
//         <div className="PromoCodeCard-discount" style={{ color: discountColor}}>{discount}% off</div>
//         <div className="PromoCodeCard-expiry">{expiry}</div>
//       </div>
//       <div className="clone-icon-div">
//         <i
//           className="fa-light fa-clone fa-rotate-90"
//           style={{ color: "#626262" }}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default PromoCodeCard;