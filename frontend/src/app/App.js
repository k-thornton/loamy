import { React, useEffect } from "react";
import ChatBot from "../components/ChatBot";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import SurveyPage from "../pages/WomenLikeMe";

const App = () => {
  useEffect(() => {
    // Enable smooth scroll for all anchor links
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach((link) => {
      link.onclick = function (e) {
        e.preventDefault();
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0; // Adjust this value if necessary
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      };
    });
  }, []);

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
        <div>{/* <Footer/> */}</div>
      </div>
    </Router>
  );
};

export default App;
