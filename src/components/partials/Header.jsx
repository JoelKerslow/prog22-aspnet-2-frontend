import React, { useState, useEffect, useRef, useContext } from 'react';
import SideBarContact from './SideBarContact';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';



const Header = ({headerContent, useGoBackButton, showCartButton }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const {cart, addCartItem} = useContext(CartContext);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDocumentClick = (event) => {
    const sidebarContainer = sidebarRef.current;
    const sidebarToggleBtn = document.querySelector('.fa-bars');
    if (sidebarContainer && !sidebarContainer.contains(event.target) && sidebarToggleBtn !== event.target) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleGoBack = () => {
    window.history.go(-1);
  };


  return (
    <header>
      <div className='header-container'>
      {useGoBackButton ? (
          <button className='fa-solid fa-arrow-left' onClick={handleGoBack}></button>
        ) : (
          <button className='fa-solid fa-bars' onClick={handleSidebarToggle}></button>
        )}
        

        <div className='header-content'>
          {headerContent}
        </div>
        
        {showCartButton ? (
          <div className='cart-section'>
            <div className='cart-button'>
              <Link to="/cart" className="cart-link">
                <button className='fa-thin fa-bag-shopping'></button>
              </Link>
              <div className='cart-total-circle'>
                ${cart.totalAmountWithDiscount}
              </div>
            </div>
          </div>
        ) : (
          <div className='empty-placeholder'></div>
        )}
      </div>
      
      {isSidebarOpen && (
        <SideBarContact sidebarRef={sidebarRef} toggleSideBar={handleSidebarToggle}/>
      )}
    </header>
  );
};

export default Header;
