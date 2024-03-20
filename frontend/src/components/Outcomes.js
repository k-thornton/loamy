import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../features/survey/surveySlice";
import ZodiacSignPage from "./ZodiacSignPage";
import Create3DPieChart from "../components/Create3DPieChart";
import ChatBot from "./ChatBot";
import FullscreenLoader from "./FullscreenLoader";
import ChartCarousel from "./ChartCarousel";
import ResultsIntro from "./static/ResultsIntro";
import RadialBar from "./RadialBar";
import ChartCards from "./ChartCard";

function Outcomes() {
  const dispatch = useDispatch();
  const { myPersona, loading, error } = useSelector((state) => state.survey);
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [selectedBinType, setSelectedBinType] = useState("stim_day_bins");

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

  const setSelectedBins = (binType) => () => {
    setSelectedBinType(binType);
    console.log(`bin type selected: ${binType}`);
  };

  return (
    <div>
    <ResultsIntro/>
    <ChartCards myPersona={myPersona}/>
    <RadialBar/>
      <div>
        {myPersona &&
          Object.entries(myPersona).map(([key, value], index) => (
            <div key={index}>
              <strong>{key}:</strong> {JSON.stringify(value)}
            </div>
          ))}
      </div>
      <ChartCarousel myPersona={myPersona} />
      {/* <Create3DPieChart
        labels={Object.values(myPersona[selectedBinType].labels)}
        values={Object.values(myPersona[selectedBinType].groups)}
        title={`${(myPersona[selectedBinType].highest_percent * 100).toFixed(
          0
        )}% of women like you have ${
          myPersona[selectedBinType].highest
        } ${selectedBinType}`}
      /> */}
      <ZodiacSignPage sign={selectedZodiac} />
      <ChatBot />
    </div>
  );
}

export default Outcomes;
