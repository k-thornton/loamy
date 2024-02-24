// src/components/Navbar.js
import React from 'react';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <ul>
        {/* Other navigation items */}
        {!isAuthenticated ? (
          ''
        ) : (
          <button onClick={onLogout}>Logout</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
