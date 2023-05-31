import React, { createContext, useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from './UserContext';
import { AuthorizationContext } from './AuthorizationContext';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState(null); 
  const { authorize } = useContext(AuthorizationContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const tokenValid = await authorize();

        if (!tokenValid || !currentUser || !currentUser.id) {
          return;
        }

        const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0';
        const token = Cookies.get('maneroToken');
        const url = `https://aspnet2-grupp1-backend.azurewebsites.net/api/Wishlist?apiKey=${apiKey}`;

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const wishlistItems = data.wishlistItems || [];

          const wishlistWithRatings = await Promise.all(
            wishlistItems.map(async (item) => {
              try {
                const ratingResponse = await fetch(
                  `https://aspnet2-grupp1-backend.azurewebsites.net/api/ProductReviews?productId=${item.productId}`,
                  {
                    headers: {
                      'API-KEY': apiKey,
                    },
                  }
                );

                if (ratingResponse.ok) {
                  const ratingData = await ratingResponse.json();
                  const ratings = ratingData.map((review) => review.rating);
                  const averageRating =
                    ratings.length > 0
                      ? ratings.reduce((a, b) => a + b, 0) / ratings.length
                      : 0;

                  return { ...item, rating: averageRating };
                } else {
                  console.error(
                    `Error fetching rating for product with ID ${item.productId}`
                  );
                  return item;
                }
              } catch (error) {
                console.error(
                  `Error fetching rating for product with ID ${item.productId}`,
                  error
                );
                return item;
              }
            })
          );

          setWishlist(wishlistWithRatings);
        } else {
          throw new Error(`Error fetching wishlist: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [authorize, currentUser]);

  const removeItemFromWishlist = async (itemId) => {
    try {
      const token = Cookies.get('maneroToken');
      const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0';
      const url = `https://aspnet2-grupp1-backend.azurewebsites.net/api/Wishlist/Item/Delete?productId=${itemId}`;

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'API-KEY': apiKey,
          Authorization: 'Bearer ' + Cookies.get('maneroToken'),
        },
      });

      if (response.ok) {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item.productId !== itemId)
        );
      } else {
        throw new Error(
          `Error removing item from wishlist: ${response.status}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Flytta över denna del till cartcontext. 
  //undersök hur man kan göra med quantity (vissa produkter läggs till med quantity 0)
  const addToCart = async (productId) => {
    try {
        
        const cartBaseUrl = 'https://aspnet2-grupp1-backend.azurewebsites.net/api/Cart/'
      const token = Cookies.get('maneroToken');
      const apiKey = 'f77ca749-67f4-4c22-9039-137272442ea0';
      const url = `${cartBaseUrl}/Item/Create`;

      const item = {
        productId: productId,
        quantity: 1,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'API-KEY': apiKey,
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || response.status);
      }

      setCartItem(productId);
      const cartItem = await response.json();
      console.log('Added cart item: ', cartItem);
    } catch (error) {
      console.log('Failed to add cart item: ', error);
    }
  };

  const wishlistContextValue = {
    wishlist,
    loading,
    removeItemFromWishlist,
    addToCart,
  };

  return (
    <WishlistContext.Provider value={wishlistContextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
