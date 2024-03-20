import React from "react";
import Create3DPieChart from "../components/Create3DPieChart";

function ChartCarousel({ myPersona }) {
  const binTypes = ["stim_day_bins", "eggs_retrieved_bins", "eggs_mature_bins"];
  const friendlyNames = ["stim days", "retrieved eggs", "mature eggs"];

  return (
    <>
      <div className="carousel w-full bg-neutral rounded-box">
        {binTypes.map((binType, index) => {
          const binData = myPersona[binType];
          return (
            <div id={binType} className="carousel-item w-full relative">
              <Create3DPieChart
                className="rounded-box w-full"
                labels={Object.values(binData.labels)}
                values={Object.values(binData.groups)}
              />
              <div className="absolute bottom-2 left-0 w-full flex items-center justify-center text-center p-4">{`${(
                binData.highest_percent * 100
              ).toFixed(0)}% of women like you have ${binData.highest} ${
                friendlyNames[index]
              }.`}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {binTypes.map((binType, index) => {
          return (
            <a href={`#${binType}`} className="btn btn-xs">
              {friendlyNames[index]}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default ChartCarousel;
