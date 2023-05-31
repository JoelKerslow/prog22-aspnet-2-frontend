import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { WishlistContext } from "../../contexts/WishlistContext";
// import MessageBox from "./generalPartials/MessageBox";

const FavouriteIcon = ({ product }) => {
  const [favourite, setFavourite] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const {addWishlistItem} = useContext(WishlistContext)


  const handleFavouriteClick = () => {
    if (favourite) {
      //functionality to remove product to customers wishlist
      setFavourite(false);
      setShowMessageBox(false);
    } else {
      addWishlistItem(product.id)
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
