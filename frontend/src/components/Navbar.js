import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import the Link component

const Navbar = ({ isAuthenticated, onLogout }) => {
  const greeting = useSelector((state) => state.survey.greeting);

  return (
    <nav>
      <ul>
        {/* Home navigation item */}
        <li>
          <Link to="/">Home</Link> {/* Add this line to include a link to the home page */}
        </li>
        {/* Other navigation items */}
        {!isAuthenticated ? (
          <li>
            <p>You're logged out, please log in below.</p>
          </li>
        ) : (
          <li>
            <p>{greeting}</p>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
