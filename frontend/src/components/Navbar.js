import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const greeting = useSelector((state) => state.survey.greeting);

  return (
    <nav>
      <ul>
        {/* Other navigation items */}
        {!isAuthenticated ? (
          <div>
            <p>You're logged out, please log in below.</p>
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
