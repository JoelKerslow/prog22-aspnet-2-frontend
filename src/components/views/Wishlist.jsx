import React, { useContext } from 'react';
import { WishlistContext } from '../../contexts/WishlistContext';
import Navbar from '../partials/Navbar';
import Header from '../partials/Header';
import StarRating from '../partials/StarRating';

const Wishlist = () => {
  const { wishlist, loading, removeItemFromWishlist, addToCart } = useContext(WishlistContext);

  return (
    <div>
      <Header headerContent={<h2>Wishlist</h2>} useGoBackButton={false} />
      {loading ? (
        <p>Loading wishlist...</p>
      ) : (
        <div className="wishlist-group">
          {wishlist.length > 0 ? (
            <ul className="wishlist-items">
              {wishlist.map((item) => (
                <li key={item.productId} className="wishlist-item">

                  <img src={item.product.imageUrl} alt={item.product.name} />

                  <div className="wishlist-details">
                    <p className="wishlist-name">{item.product.name}</p>
                    <p className="wishlist-price">${item.product.price}</p>
                    <div className="wishlist-rating">
                      <StarRating rating={item.rating} reviewCount={item.reviewCount} />
                    </div>
                  </div>
                  <div className="wishlist-icons">
                    <button
                      className="wishlist-remove"onClick={() => removeItemFromWishlist(item.productId)}>
                    </button>
                    
                    <button className="wishlist-add-to-cart" onClick={() => addToCart(item.productId)}>
                      <i className="fa-thin fa-bag-shopping"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default Wishlist;
