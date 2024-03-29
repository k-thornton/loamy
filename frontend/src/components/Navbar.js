import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./static/logo.png";
import { resetAnswers } from "../features/survey/surveySlice";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const greeting = useSelector((state) => state.auth.greeting);
  const dispatch = useDispatch();

  return (
    <nav className="top-0">
      <div className="navbar bg-base-100 p-6 lg:px-8">
        <div className="flex-1 ">
          <Link to="/" className=" p-1.5 -m-1.5 ">
            <img
              className="w-24 flex items-center justify-center"
              src={logo}
              alt="Home"
            />
          </Link>
        </div>
        {isAuthenticated && (
          <div className="flex-none gap-2">
            <p className="hidden sm:block text">{greeting.email}</p>
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
                  <button onClick={() => dispatch(resetAnswers())}>
                    Reset My Answers
                  </button>
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
