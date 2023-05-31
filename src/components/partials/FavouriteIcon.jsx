import React, { useState, useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
const FavouriteIcon = ({ product }) => {

  const [favourite, setFavourite] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const {addWishlistItem, wishlist, fetchWishlist, removeItemFromWishlist} = useContext(WishlistContext)


  const handleFavouriteClick = () => {
    if (favourite) {
      removeItemFromWishlist(product.id)
      setFavourite(false);
      setShowMessageBox(false);
    } else {
      addWishlistItem(product.id)
      setFavourite(true);
      setShowMessageBox(true);
    }
  };

  return (
    <>
      <button className="favourite-icon" onClick={() => handleFavouriteClick()}>
        <i className={`fa-heart ${favourite ? "fa-solid" : "fa-regular"}`}></i>
      </button>
    </>
  );
};

export default FavouriteIcon;
