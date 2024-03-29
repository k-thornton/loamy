import React from "react";
import RadialBar from "./RadialBar";

function transformData(input, label, unit) {
  // This code squishes the calculation data into the format expected by the RadialBar chart
  const unsortedData = Object.keys(input.groups).map((key) => ({
    id: `${input.labels[key]} ${unit}`,
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

const info = {
  // This is a little too hard coded for my liking, but it'll work for now.
  // I'd prefer the chart display to not have any idea what its data will be.
  "Day Five Embryos":
    "The number of frozen embryos that women like you typically have at this point in their fertility journey.",
  "Eggs Retrieved":
    "Our data indicates that women like you have had this many eggs retrieved at this point in their fertility journey.",
  "Fertilized Eggs":
    "Our data indicates that women like you have had this many eggs fertilized at this point in their fertility journey.",
  "Mature Eggs":
    "Our data indicates that women like you have this many mature eggs.",
};

function ChartCards({ myPersona }) {
  return (
    <div className="flex justify-center items-center max-w-[600px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-48 min-w-full aspect-square justify-center place-items-center p-7 w-full">
        {myPersona.outcomes.map((outcome, index) => {
          const data = outcome.data;
          const name = outcome.name;
          const unit = outcome.unit;
          const binData = transformData(data, name, unit);
          return (
            <div
              key={name}
              className="card bg-base-100 shadow-xl m-2 aspect-square max-w-[280px]"
            >
              <div
                id={name}
                className="relative card-body pt-5 pb-0 flex items-center justify-center"
              >
                <div className="flex items-center align-middle">
                  <h2 className="card-title text text-center mr-1 break-keep">{name}</h2>
                  <div className="tooltip" data-tip={info[name]}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-5 h-[300px] w-[300px] max-w-64 max-h-64">
                  <RadialBar data={binData} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChartCards;
