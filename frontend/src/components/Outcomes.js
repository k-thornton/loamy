import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../features/survey/surveySlice";
import ZodiacSignPage from "./ZodiacSignPage";
import Create3DPieChart from "../components/Create3DPieChart"

function Outcomes() {
  const dispatch = useDispatch();
  const { myPersona, loading, error } = useSelector((state) => state.survey);
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [selectedBinType, setSelectedBinType] = useState('stim_day_bins');

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  useEffect(() => {
    // Anytime myPersona is updated, also select the user's zodiac
    if (myPersona) {
      setSelectedZodiac(myPersona.zodiac);
    }
  }, [myPersona]);

  if (!selectedZodiac || !myPersona) {
    return <div>No questions to display</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const setSelectedBins = (binType) => () => {
    setSelectedBinType(binType);
    console.log(`bin type selected: ${binType}`)
  };

  return (
    <div className="outcomesList">
      <div>
        {myPersona &&
          Object.entries(myPersona).map(([key, value], index) => (
            <div key={index}>
              <strong>{key}:</strong> {JSON.stringify(value)}
            </div>
          ))}
      </div>
      <button onClick={setSelectedBins('stim_day_bins')}>Stim Day</button>
      <button onClick={setSelectedBins('eggs_retrieved_bins')}>Eggs Retrieved</button>
      <button onClick={setSelectedBins('eggs_mature_bins')}>Eggs Mature</button>
      <Create3DPieChart
        labels={Object.values(myPersona[selectedBinType].labels)}
        values={Object.values(myPersona[selectedBinType].groups)}
        title={`${(myPersona[selectedBinType].highest_percent * 100).toFixed(0)}% of women like you have ${myPersona[selectedBinType].highest} ${selectedBinType}`}
      />
      <ZodiacSignPage sign={selectedZodiac} />
    </div>
  );
}

export default Outcomes;
