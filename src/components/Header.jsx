import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="home">
          {/* <img src="/assets/Logo_1.png" alt="Snowclaw Games Logo" className="logo" /> */}
          <Link to="/">Snowclaw Games</Link>
        </div>

        <nav className="menu">
          <ul className="menu-nav">
            <li><Link to="/game">Product</Link></li>
            {/* <li><Link to="/ux">UX Design</Link></li>
            <li><Link to="/media">Media</Link></li>*/}
            <li><Link to="/about">About</Link></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;