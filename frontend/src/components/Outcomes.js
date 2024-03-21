import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../features/survey/surveySlice";
import ZodiacSignPage from "./ZodiacSignPage";
import ChatBot from "./ChatBot";
import FullscreenLoader from "./FullscreenLoader";
import ResultsIntro from "./static/ResultsIntro";
import ChartCards from "./ChartCards";

function Outcomes() {
  const dispatch = useDispatch();
  const { myPersona, loading, error } = useSelector((state) => state.survey);
  const [selectedZodiac, setSelectedZodiac] = useState("");

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  useEffect(() => {
    // Anytime myPersona is updated, also select the user's zodiac
    if (myPersona) {
      setSelectedZodiac(myPersona.zodiac);
    }
  }, [myPersona]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <FullscreenLoader />;
  }

  if (!selectedZodiac || !myPersona) {
    return <div>No outcome to display</div>;
  }

  return (
    <div>
    <ResultsIntro/>
    <ChartCards myPersona={myPersona}/>
      {/* <div>
        {myPersona &&
          Object.entries(myPersona).map(([key, value], index) => (
            <div key={index}>
              <strong>{key}:</strong> {JSON.stringify(value)}
            </div>
          ))}
      </div> */}
      {/* <ZodiacSignPage sign={selectedZodiac} /> */}
      <ChatBot />
    </div>
  );
}

export default Outcomes;
