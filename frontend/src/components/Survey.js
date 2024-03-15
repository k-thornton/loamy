import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  updateAnswer,
  submitAnswers,
} from "../features/survey/surveySlice";
import { showModal } from "../features/modal/modalSlice";
import Outcomes from "./Outcomes";
import Steps from "./Steps";
import Accordion from "./Accordion";
import Faq from "./Faq";
import RadioGroup from "./RadioGroup";

function Survey() {
  const dispatch = useDispatch();
  const { questions, loading, answers, error } = useSelector(
    (state) => state.survey
  );
  // Manage selectedOption and currentQuestionIndex state locally since they're not necessary as global state
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    // This will set the user's answer as the selected option whenever the question index changes
    const id = questions[currentQuestionIndex]?._id;
    let userAnswer = answers[id];
    setSelectedOption(userAnswer ? userAnswer : "");
  }, [answers, questions, currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePreviousQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex - 1;
    if (nextQuestionIndex >= 0) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      //should be unreachable
      alert("Can't go back");
    }
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }
    dispatch(
      updateAnswer({ questionId: currentQuestion._id, answer: selectedOption })
    );
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      dispatch(submitAnswers());
      setIsSurveyCompleted(true);
      dispatch(showModal("You have completed the survey!"));
      // alert("You have completed the survey!");
    }
  };

  if (isSurveyCompleted) {
    return <Outcomes />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!questions || questions.length === 0) {
    return <div>No questions to display</div>;
  }

  const speedRun = () => {
    setIsSurveyCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-auto p-4">
      {/* <button
        type="button"
        onClick={speedRun}
        className="mt-4 mb-8 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition duration-150 ease-in-out"
      >
        Go Fast
      </button> */}
      {/* <div className="overflow-auto mb-4 w-full flex flex-col items-center" style={{ maxHeight: '80vh' }}> */}
      <h2 className="text-xl font-semibold text-gray-800">
        {currentQuestion.text}
      </h2>
      <p className="mb-4 text-md text-gray-600">
        {currentQuestion.description}
      </p>
      {currentQuestion.faq && <Faq faqs={currentQuestion.faq} />}
      {currentQuestion.note && (
        <div role="alert" className="alert w-1/2 space-y-2">
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
          <span>{currentQuestion.note}</span>
        </div>
      )}
      {currentQuestion.answerType === "multipleChoice" ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <RadioGroup
            options={currentQuestion.choices}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </form>
      ) : (
        <div key={`question-${currentQuestion._id}`}>
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              id={currentQuestion._id}
              placeholder={currentQuestion.description}
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
              className="input input-bordered w-full max-w-xs mt-4"
            />
          </label>
        </div>
      )}
      <div className="flex justify-center mt-4 mb-8">
        <div className="join grid grid-cols-2 gap-0 max-w-xs">
            <button
              onClick={handlePreviousQuestion}
              className="join-item btn btn-outline"
              disabled={currentQuestionIndex <= 0}
            >
              Back
            </button>
          <button
            onClick={handleNextQuestion}
            className="join-item btn btn-outline"
          >
            {currentQuestionIndex < questions.length - 1
              ? "Next"
              : "See Results"}
          </button>
        </div>
      </div>
      {/* </div> */}
      <Steps
        currentStep={currentQuestionIndex + 1}
        totalSteps={questions.length}
      />
    </div>
  );
}

export default Survey;