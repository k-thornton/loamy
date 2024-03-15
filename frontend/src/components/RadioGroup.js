import React from "react";

function RadioGroup({ options, selectedOption, setSelectedOption }) {
  return (
    <div className="w-70">
      {options.map((option, index) => (
        <div key={index} className="form-control w-full md:w-3/4 mx-auto">
          <label className="label cursor-pointer flex items-center space-x-4">
            
            <input
              type="radio"
              name="radio-group"
              className="radio radio-sm checked:radio-primary"
              value={option.text}
              checked={selectedOption === option.text}
              onChange={() => setSelectedOption(option.text)}
            />
            <span className="label-text flex-1 text-left">{option.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioGroup;
