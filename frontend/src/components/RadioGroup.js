import React from "react";

function RadioGroup({ options, selectedOption, setSelectedOption }) {
  return (
    <div className="w-70 mt-4">
      {options.map((option, index) => (
        <div key={index} className="form-control w-full md:w-3/4 mx-auto relative">
          <label className="label cursor-pointer flex items-center space-x-4">
            <input
              type="radio"
              name="radio-group"
              className="radio radio-sm checked:bg-primary"
              value={option.text}
              checked={selectedOption === option.text}
              onChange={() => setSelectedOption(option.text)}
            />
            <span className="label-text flex-1 text-left">{option.text}</span>
            {option.tooltip && (
              <div className="tooltip tooltip-left" data-tip={option.tooltip}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioGroup;
