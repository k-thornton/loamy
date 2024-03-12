import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../features/survey/surveySlice";
import ZodiacSignPage from "./ZodiacSignPage";

function Outcomes() {
  const dispatch = useDispatch();
  const { myPersona } = useSelector((state) => state.survey);
  const [selectedZodiac, setSelectedZodiac] = useState('');

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  useEffect(() => {
    // Anytime myPersona is updated, also select the user's zodiac
    if (myPersona){
      setSelectedZodiac(myPersona.zodiac);
    }
  }, [myPersona]);

  if (!selectedZodiac || !myPersona) {
    return <div>No questions to display</div>;
  }

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
      <ZodiacSignPage sign={selectedZodiac} />
    </div>
  );
}

export default Outcomes;
