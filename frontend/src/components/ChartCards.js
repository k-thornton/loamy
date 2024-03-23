import React from "react";
import RadialBar from "./RadialBar";

function transformData(input, label) {
  // This code squishes the calculation data into the format expected by the RadialBar chart
  const unsortedData = Object.keys(input.groups).map((key) => ({
    id: `${input.labels[key]}`,
    data: [
      {
        x: input.labels[key],
        y: input.groups[key],
      },
    ],
  }));

  // Parsing and comparison logic for custom sorting of the top-level data array
  const parseValue = (x) => {
    if (x.startsWith("<")) {
      return { value: parseFloat(x.slice(1)), modifier: "start" };
    } else if (x.endsWith("+")) {
      return { value: parseFloat(x.slice(0, -1)), modifier: "end" };
    } else if (x.includes("-")) {
      return { value: parseFloat(x.split("-")[0]), modifier: "range" };
    }
    return { value: parseFloat(x), modifier: "exact" };
  };

  const customSort = (a, b) => {
    const parsedA = parseValue(a.id);
    const parsedB = parseValue(b.id);

    // Compare using modifier rules
    if (parsedA.modifier === "start" && parsedB.modifier !== "start") return -1;
    if (parsedB.modifier === "start" && parsedA.modifier !== "start") return 1;
    if (parsedA.modifier === "end" && parsedB.modifier !== "end") return 1;
    if (parsedB.modifier === "end" && parsedA.modifier !== "end") return -1;

    // If not '<' or '+', compare by numeric value
    return parsedA.value - parsedB.value;
  };

  // Sort the top-level data array using the custom comparison
  const sortedData = unsortedData.sort(customSort);

  return sortedData.reverse();
}

function ChartCards({ myPersona }) {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 min-w-full justify-center items-center overflow-y-auto p-10 min-h-screen">
      {Object.entries(myPersona.outcomes).map(
        ([outcomeType, outcomeData], index) => {
          const binData = transformData(outcomeData, outcomeType);
          return (
            <div
              key={outcomeType}
              className="card bg-base-100 shadow-xl m-4 aspect-w-1 aspect-h-1 min-w-100"
            >
              <div
                id={outcomeType}
                className="relative card-body pt-5 pb-0 flex items-center justify-center"
              >
                <h2 className="card-title text-center">{outcomeType}</h2>
              </div>
              <div className="p-5 w-full h-96"><RadialBar data={binData} /></div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ChartCards;