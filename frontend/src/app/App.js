import React from "react";
import ChatBot from "../components/ChatBot";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer"
import SurveyPage from "../pages/WomenLikeMe";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womenlikeme" element={<SurveyPage />} />
          {/* Other routes go here */}
          
          {/* Default/Fallback route, redirecting to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <div>
          <Footer/>
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;
