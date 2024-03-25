import React from "react";

const Steps = ({ currentStep, totalSteps }) => {
  return (
    <ul className="steps lg:steps-horizontal">
      {Array.from({ length: totalSteps }, (_, index) => (
        <li
          key={index}
          className={`step ${index + 1 <= currentStep ? "step-primary" : ""}`}
        />
      ))}
    </ul>
  );
};

export default Steps;
