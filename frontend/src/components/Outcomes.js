import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, unsetSurveyCompleted } from "../features/survey/surveySlice";
import ChatBot from "./ChatBot";
import FullscreenLoader from "./FullscreenLoader";
import Heading from "./outcomes/Heading";
import Methodology from "./outcomes/Methodology";
import LabValues from "./outcomes/LabValues";
import YourResults from "./outcomes/YourResults";
import Sources from "./outcomes/Sources";
import Intro from "./outcomes/Intro";
import HowToInterpret from "./outcomes/HowToInterpret";
import WhatToExpect from "./outcomes/WhatToExpect";
import NextSteps from "./outcomes/NextSteps";
import Conclusion from "./outcomes/Conclusion";

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
    return <FullscreenLoader />;
  }

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
      <div className="p-5">
      <div className="container mx-auto">
        <Heading />
        <Intro myPersona={myPersona}/>
        <YourResults myPersona={myPersona} />

        <HowToInterpret myPersona={myPersona}/>
        <Methodology />
        <LabValues myPersona={myPersona} />

        <WhatToExpect myPersona={myPersona}/>
        <NextSteps myPersona={myPersona}/>

        <Conclusion myPersona={myPersona}/>
        <Sources />

    <button className="btn btn-xs" onClick={() => dispatch(unsetSurveyCompleted())}>Back to Survey</button>
      </div>
    </div>
      <ChatBot />
    </div>
  );
}

export default Outcomes;
