import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function Navbar() {
  const location = useLocation();

  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/clock' ? 'active' : ''}`}>
            <Link to="/clock">Clock</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/timer' ? 'active' : ''}`}>
            <Link to="/timer">Timer</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/stopwatch' ? 'active' : ''}`}>
            <Link to="/stopwatch">Stopwatch</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Navbar;

