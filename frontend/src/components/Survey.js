import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  updateAnswer,
  submitAnswers,
  clearError,
} from "../features/survey/surveySlice";
import { showModal } from "../features/modal/modalSlice";
import Outcomes from "./Outcomes";
import Steps from "./Steps";
import Faq from "./Faq";
import RadioGroup from "./RadioGroup";
import Drawer from "./Drawer";
import { logout } from "../features/auth/authSlice";
import Disclaimer from "./static/Disclaimer";
import Question from "./Question";

function Survey() {
  const dispatch = useDispatch();
  const { questions, loading, answers, error } = useSelector(
    (state) => state.survey
  );
  const { isAuthenticated } = useSelector((state) => state.auth);
  // Manage selectedOption and currentQuestionIndex state locally since they're not necessary as global state
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(showModal({ componentId: "Disclaimer" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearError());
    dispatch(fetchQuestions())
      .unwrap()
      // .then(() => {
      //   // After fetching questions, check if all have been answered
      //   if (questions.length > 0 && Object.keys(answers).length >= questions.length) {
      //     setIsSurveyCompleted(true);
      //   } else {
      //     setIsSurveyCompleted(false);
      //   }
      // })
      .catch((error) => {
        console.error("Session expired. Redirecting to login...", error);
        dispatch(logout());
      });
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    // This will set the user's answer as the selected option whenever the question index changes
    const id = questions[currentQuestionIndex]?._id;
    let userAnswer = answers[id];
    setSelectedOption(userAnswer ? userAnswer : "");
  }, [answers, questions, currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  const handlePreviousQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex - 1;
    if (nextQuestionIndex >= 0) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      //should be unreachable
      dispatch(showModal({ content: "Can't go back", title: "Alert" }));
    }
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      dispatch(
        showModal({
          content: "Please select an option before proceeding.",
          title: "Whoa there",
        })
      );
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

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const sidebarItems = ["Home", "Profile", "Settings"];

  return (
    <div className="flex flex-col items-center justify-between min-h-90 overflow-auto p-4">

      <button
        type="button"
        onClick={speedRun}
        className="mt-4 mb-8 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition duration-150 ease-in-out"
      >
        Go Fast
      </button>
      {/* <div className="overflow-auto mb-4 w-full flex flex-col items-center" style={{ maxHeight: '80vh' }}> */}
      {!isSurveyCompleted && currentQuestion && (
        <Question
          question={currentQuestion}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}

      {/* </div> */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-base-100 border-t z-10">
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
        <div className="flex justify-center mt-4 mb-8">
        <Steps
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
        /></div>
      </div>
    </div>
  );
}

export default Survey;
