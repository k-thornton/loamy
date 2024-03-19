import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { authService } from "../services/AuthService";
import DataPrivacyCommitment from "./static/Privacy";

const GoogleSignIn = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log in!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleSignIn;
