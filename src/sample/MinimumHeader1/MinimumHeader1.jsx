import React, { useState } from 'react';
import './MinimumHeader1.css';

const MinimumHeader1 = ({ menuItems }) => {
  const [isClickedMenuButton, setIsClickedMenuButton] = useState(false);

  const menuClickHandler = () => {
    setIsClickedMenuButton((pre) => !pre);
  };
  return (
    <header>
      <div className={`menu-icon ${isClickedMenuButton ? 'menu-open' : ''}`} onClick={menuClickHandler}>
        <div className="menu-border"></div>
        <div className="menu-border"></div>
      </div>
      <div className={`menu-wrapper ${isClickedMenuButton ? 'menu-open' : ''}`}>
        <div className="menu-box">
          <div className="menu-link-container">
            {menuItems
              ? menuItems.map((item) => {
                  return (
                    <p className="menu-link">
                      <a href={item.link}>{item.name}</a>
                    </p>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MinimumHeader1;
