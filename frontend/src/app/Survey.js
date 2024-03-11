import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, updateAnswer, submitAnswers } from "../features/survey/surveySlice"; // Adjust imports as needed

function Survey() {
  const dispatch = useDispatch();
  const { questions, loading } = useSelector((state) => state.survey);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  // Now, you don't need to pass questions as a prop to Survey
  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div>No questions to display</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert('Please select an option before proceeding.');
      return;
    }

    // Assuming updateAnswer takes the question ID and the selected answer as arguments
    dispatch(updateAnswer({ questionId: currentQuestion._id, answer: selectedOption }));

    // Reset for next question
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      dispatch(submitAnswers());
      alert('You have completed the survey!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>{currentQuestion.text}</h2>
      <p>{currentQuestion.description}</p>
      {currentQuestion.faq && currentQuestion.faq.map((faq, index) => (
        <details key={index} style={{ marginBottom: '10px' }}>
          <summary>{faq.title}</summary>
          <p>{faq.body}</p>
        </details>
      ))}
      {currentQuestion.note && <p style={{ fontStyle: 'italic' }}>{currentQuestion.note}</p>}
      {currentQuestion.answerType === 'multipleChoice' ? (
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
          <button type="button" onClick={handleNextQuestion} style={{ marginTop: 20 }}>
            Next
          </button>
        </form>
      ) : (
        <div>
          <input
            type="text"
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
