import React from "react";
import Create3DPieChart from "./Create3DPieChart";
import RadialBar from "./RadialBar";

function ChartCards({ myPersona }) {
  const binTypes = ["stim_day_bins", "eggs_retrieved_bins", "eggs_mature_bins"];
  const friendlyNames = ["stim days", "retrieved eggs", "mature eggs"];
  const data = [
    {
      id: "16+",
      data: [
        {
          x: "16+",
          y: .1046,
        }
      ],
    },
    {
      id: "13-15",
      data: [
        {
          x: "13-15",
          y: .200445,
        }
      ],
    },
    {
      id: "10-12",
      data: [
        {
          x: "10-12",
          y: .5222,
        },
      ],
    },
    {
      id: "7-9",
      data: [
        {
          x: "7-9",
          y: .0774,
        },
      ],
    },
    {
      id: "<7",
      data: [
        {
          x: "<7",
          y: .184,
        },
      ],
    },
  ];
  return (
    <div className="flex items-center overflow-y-auto">
      {binTypes.map((binType, index) => {
        const binData = myPersona[binType];
        const bars = binData["labels"];
        return (
          <div className="card w-80 h-80 bg-base-100 shadow-xl">
            <RadialBar data={data} />
            <div id={binType} className="card-body h-20">
              <h2 className="card-title">{friendlyNames[index]}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChartCards;
