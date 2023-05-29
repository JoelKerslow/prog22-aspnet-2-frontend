import React, { useState, useEffect } from "react";
// import MessageBox from "./generalPartials/MessageBox";

const FavouriteIcon = ({ product }) => {
  const [favourite, setFavourite] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleFavouriteClick = () => {
    if (favourite) {
      //functionality to remove product to customers wishlist
      setFavourite(false);
      setShowMessageBox(false);
    } else {
      //functionality to add product to customers wishlist
      setFavourite(true);
      setShowMessageBox(true);
    }
  };

  //   useEffect(() => {
  //Check to see if product is in customers wishlist
  //     }
  //   }, []);

  return (
    <>
      {/* {showMessageBox && <MessageBox message="Added to favourites" />} */}

      <button className="favourite-icon" onClick={() => handleFavouriteClick()}>
        <i className={`fa-heart ${favourite ? "fa-solid" : "fa-regular"}`}></i>
      </button>
    </>
  );
};

export default FavouriteIcon;
