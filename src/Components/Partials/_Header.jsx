import React, { useState, useEffect, useRef } from 'react';
import SideBarContact from './_SideBarContact';

const Header = ({headerContent}) => {
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

        <div className='header-content'>
          {headerContent}
        </div>
        
        <button className='fa-thin fa-bag-shopping'></button>
      </div>
      
      {isSidebarOpen && (
        <SideBarContact sidebarRef={sidebarRef} toggleSideBar={handleSidebarToggle}/>
      )}
    </header>
  );
};

export default Header;
