import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Survey from "./Survey";
import ZodiacSignPage from "../pages/ZodiacSignPage";
import zodiacSignsData from "../data/zodiacSignsData";
import ChatBot from "../components/ChatBot";
import GoogleSignIn from "../pages/GoogleSignIn";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGreeting,
  fetchMe,
  setSelectedZodiac,
  resetAnswers
} from "../features/survey/surveySlice";
import { handleLogout } from "../services/AuthService";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { selectedZodiac, myPersona } =
    useSelector((state) => state.survey);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchGreeting());
    }
  }, [isAuthenticated, dispatch]);

  const selectZodiac = async (zodiacKey) => {
    const zodiacData = zodiacSignsData[zodiacKey.toLowerCase()];
    if (zodiacData) {
      setSelectedZodiac(zodiacData); // Set the selected zodiac sign data
    } else {
      console.error("Zodiac data not found for key:", zodiacKey.toLowerCase());
    }
    console.log(zodiacData);
  };

  return (
    <div className="App">
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={() => handleLogout()}
      />
      {!isAuthenticated ? (
        <GoogleSignIn />
      ) : (
        <>
          <p>Hello </p>
          <Survey />
          <button onClick={() => dispatch(resetAnswers())}>Reset All Answers</button>
          <button onClick={() => dispatch(fetchMe())}>Who am I?</button>
        </>
      )}

      <div>
        {selectedZodiac ? (
          <div>
            {myPersona ? (
              <p>
                <button
                  onClick={() => selectZodiac(myPersona.zodiac)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {myPersona.zodiac}
                </button>{" "}
                because you said {myPersona.userAnswers.join(" and ")}
              </p>
            ) : (
              <p />
            )}

            <ZodiacSignPage signData={selectedZodiac} />
            <p>See the others:</p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {Object.keys(zodiacSignsData).map((signKey) => (
                <li
                  key={signKey}
                  style={{ display: "inline", marginRight: "20px" }}
                >
                  <button
                    onClick={() => selectZodiac(signKey)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {zodiacSignsData[signKey].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
