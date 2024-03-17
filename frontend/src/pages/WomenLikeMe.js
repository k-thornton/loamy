// SurveyPage.js
import React from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import Survey from "../components/Survey";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal"
import { authService } from "../services/AuthService";

function SurveyPage() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
    <Modal/>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={() => authService.handleLogout()}
      />
      {!isAuthenticated ? <GoogleSignIn /> : <Survey />}
    </div>
  );
}

export default SurveyPage;
