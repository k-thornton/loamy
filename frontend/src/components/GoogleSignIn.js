import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { authService } from "../services/AuthService";

const GoogleSignIn = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left pl-4 pt-5">
            <h1 className="text-5xl font-bold">Log in!</h1>
            <p className="py-6 min-w-full">
              Welcome to Loamy!  Please sign in with Google to begin.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <GoogleLogin
                onSuccess={authService.handleGoogleLoginSuccess}
                onFailure={authService.handleGoogleLoginFailure}
                type="standard"
                width="300"
                theme="outline"
                logo_alignment="left"
                shape="rectangular"
                text="continue_with"
                size="medium"
                ux_mode="popup"
                cancel_on_tap_outside={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleSignIn;
