import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="app-title">My App</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
