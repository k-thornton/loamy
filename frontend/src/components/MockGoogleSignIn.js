import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { authService } from "../services/AuthService";

const MockGoogleSignIn = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left pl-4 pt-5 min-w-[40vh]">
            <h1 className="text-5xl font-bold">Sign In.</h1>
            <p className="py-6 min-w-full">
              Welcome to Loamy!  Please sign in to begin.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button className="btn" onClick={authService.handleMockGoogleLoginSuccess}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockGoogleSignIn;
