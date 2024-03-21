import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../features/survey/surveySlice";
import ChatBot from "./ChatBot";
import FullscreenLoader from "./FullscreenLoader";
import ResultsIntro from "./outcomes/ResultsIntro";
import ChartCards from "./ChartCards";
import ReadMore from "./ReadMore";

function Outcomes() {
  const dispatch = useDispatch();
  const { myPersona, loading, error } = useSelector((state) => state.survey);

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <FullscreenLoader />;
  }

  if (!myPersona) {
    return <div><button>Take the survey</button>No outcome to display</div>;
  }

  return (
    <div>
    <ResultsIntro/>
    <ReadMore maxItems={2}>
      <p>Paragraph 1: Some interesting content here.</p>
      <p>Paragraph 2: More interesting content here.</p>
      <p>Paragraph 3: Even more interesting content here.</p>
      <ResultsIntro></ResultsIntro>
</ReadMore>
    {/* <div className="flex w-full justify-center items-center min-h-screen"> */}
    <ChartCards myPersona={myPersona}/>
    {/* </div> */}
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
