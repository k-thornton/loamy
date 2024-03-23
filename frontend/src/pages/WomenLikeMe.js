// SurveyPage.js
import React from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import Survey from "../components/Survey";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { authService } from "../services/AuthService";
import { ModalProvider } from "../contexts/ModalContext";
import Modal from "../components/Modal"

function SurveyPage() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen">
      <ModalProvider>
        <Modal />
        <Navbar
          isAuthenticated={isAuthenticated}
          onLogout={() => authService.handleLogout()}
        />
        {!isAuthenticated ? <GoogleSignIn /> : <Survey />}
      </ModalProvider>
    </div>
  );
}

export default SurveyPage;
