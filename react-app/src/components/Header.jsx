import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="app-name">
        <span>MovieHub</span>
      </div>

      <div className="nav-links">
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/Favorites">Favorites </Link>
      </div>
    </nav>
  );
}

export default Header;
