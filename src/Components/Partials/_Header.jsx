import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

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

  return (
    <header>
      <div className='header-container'>
        <button className='fa-solid fa-bars' onClick={handleSidebarToggle}></button>
        <h1>Manero</h1>
        <button className='fa-thin fa-bag-shopping'></button>
      </div>
      {isSidebarOpen && (
        <div className="sidebar-overlay">
          <div className="sidebar-container" ref={sidebarRef}>
            <button className="close-button" onClick={handleSidebarToggle}>
              &times;
            </button>
            <h1>Contact us</h1>
            <ul>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
