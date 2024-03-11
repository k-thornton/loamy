import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const greeting = useSelector((state) => state.survey.greeting); // Adjust path based on your state structure

  return (
    <nav>
      <ul>
        {/* Other navigation items */}
        {!isAuthenticated ? (
          <div>
            <p>pls login below</p>
          </div>
        ) : (
          <div>
            <p>{greeting}</p>
            <button onClick={onLogout}>Logout</button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
