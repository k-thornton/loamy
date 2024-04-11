import React from "react";
import Plot from "react-plotly.js";

const Create3DPieChart = ({ labels, values, title, className}) => {
  const data = [
    {
      type: "pie",
      labels: labels,
      values: values,
      hole: 0.3,
      marker: {
        colors: [
          "hsl(0, 100%, 70%)",
          "hsl(33, 100%, 70%)",
          "hsl(66, 100%, 70%)",
          "hsl(99, 100%, 70%)",
          "hsl(132, 100%, 70%)",
          "hsl(165, 100%, 70%)",
          "hsl(198, 100%, 70%)",
          "hsl(231, 100%, 70%)",
          "hsl(264, 100%, 70%)",
          "hsl(297, 100%, 70%)",
          "hsl(330, 100%, 70%)",
        ],
      },
    },
  ];



  const layout = {
    title: title,
  };

  return (<Plot data={data} layout={layout} className={className} />
  );
};

export default Create3DPieChart;
