import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./static/logo.png";
import { resetAnswers } from "../features/survey/surveySlice";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const greeting = useSelector((state) => state.auth.greeting);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <img
              className="w-40 p-3 flex items-center justify-center"
              src={logo}
              alt="Home"
            />
          </Link>
        </div>
        {isAuthenticated && (
          <div className="flex-none gap-2">
            <p>{greeting.email}</p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Navbar Profile"
                    src={greeting.picture}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={() => dispatch(resetAnswers())}>Reset My Answers</button>
                </li>
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
