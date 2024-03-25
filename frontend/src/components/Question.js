import React, { useRef, useEffect } from 'react';
import RadioGroup from './RadioGroup';

function Question({ question, selectedOption, setSelectedOption }) {
  const isNumericInput = question.expectedDataType === 'numeric';

  // Create a ref for the input element
  const inputRef = useRef(null);

  // Use useEffect to focus on the input element when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="mb-8 flex flex-col items-center justify-center relative w-full">
      <h2 className="text text-xl font-semibold text-gray-800 flex items-center justify-center">
        {question.text}
        {question.tooltip && (
          <div className="tooltip tooltip-right ml-2" data-tip={question.tooltip}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </h2>
      {question.subHeading ? <h3 className='text text-sm mb-4'>{question.subHeading}</h3> : <div className='mb-4'/>}
      <p className="mt-4 text-md text-gray-600">{question.description}</p>
      {question.answerType === "multipleChoice" ? (
        <RadioGroup
          options={question.choices}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ) : (
        <div className="w-full max-w-xs">
          <label className="form-control w-full">
            <input
              ref={inputRef}
              type="text"
              id={question._id}
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
              className="input input-bordered w-full mt-3"
              // If numeric input is expected, prevent non-numeric characters
              onKeyDown={isNumericInput ? (e) => {
              if (!["Backspace", "ArrowLeft", "ArrowRight", "Tab", ".", "-"].includes(e.key) && isNaN(Number(e.key))) {
                e.preventDefault();
              }
            } : undefined}
            />
          </label>
        </div>
      )}
      {question.note && (
        <div role="alert" className="alert w-full max-w-s md:w-1/2 space-y-2 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{question.note}</span>
        </div>
      )}
    </div>
  );
}

export default Question;
