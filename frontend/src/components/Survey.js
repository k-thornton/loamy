import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  updateAnswer,
  submitAnswers,
} from "../features/survey/surveySlice";
import Outcomes from "./Outcomes";

function Survey() {
  const dispatch = useDispatch();
  const { questions, loading, answers } = useSelector((state) => state.survey);
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
      alert("You have completed the survey!");
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div>No questions to display</div>;
  }

  if (isSurveyCompleted) {
    return <Outcomes />;
  }

  const speedRun = () =>{
    setIsSurveyCompleted(true);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
    <button
            type="button"
            onClick={speedRun}
            style={{ marginTop: 20 }}
          >Go Fast</button>
      <h2>{currentQuestion.text}</h2>
      <p>{currentQuestion.description}</p>
      {currentQuestion.faq &&
        currentQuestion.faq.map((faq, index) => (
          <details key={index} style={{ marginBottom: "10px" }}>
            <summary>{faq.title}</summary>
            <p>{faq.body}</p>
          </details>
        ))}
      {currentQuestion.note && (
        <p style={{ fontStyle: "italic" }}>{currentQuestion.note}</p>
      )}
      {currentQuestion.answerType === "multipleChoice" ? (
        <form onSubmit={(e) => e.preventDefault()}>
          {currentQuestion.choices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`choice-${index}`}
                name="answer"
                value={choice.text}
                checked={selectedOption === choice.text}
                onChange={handleOptionChange}
              />
              <label htmlFor={`choice-${index}`}>{choice.text}</label>
            </div>
          ))}
          <button
            type="button"
            onClick={handleNextQuestion}
            style={{ marginTop: 20 }}
          >
            Next
          </button>
        </form>
      ) : (
        <div key={`question-${currentQuestion._id}`}>
          <input
            type="text"
            id={currentQuestion._id}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            placeholder={currentQuestion.description}
          />
          <button onClick={handleNextQuestion} style={{ marginTop: 20 }}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Survey;
