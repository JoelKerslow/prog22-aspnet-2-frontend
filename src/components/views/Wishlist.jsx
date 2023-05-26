import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../../contexts/UserContext';
import { AuthorizationContext } from '../../contexts/AuthorizationContext';
import Navbar from '../partials/Navbar';
import Header from '../partials/Header';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const { useAuthorization, authorize } = useContext(AuthorizationContext);
    const { currentUser } = useContext(UserContext);
  
    useAuthorization();
  
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
                setWishlist(data.wishlistItems || []);
                console.log(data);
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
      
  
    const addToCart = (productId) => {
        console.log(`Adding product with ID ${productId} to cart`);
      };
    
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
                      </div>
                      <div className="wishlist-icons">

                        <button className="wishlist-remove" onClick={() => removeItemFromWishlist(item.productId)}>
                          <i className="fa-solid fa-heart"></i> </button>

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

  