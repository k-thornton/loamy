// src/components/Navbar.js
import React from 'react';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <ul>
        {/* Other navigation items */}
        {!isAuthenticated ? (
          <li><a href="/login">Login</a></li>
        ) : (
          <li><button onClick={onLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
