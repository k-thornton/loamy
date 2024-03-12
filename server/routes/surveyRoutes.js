const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const User = require("../models/User");
const authenticateToken = require("../middleware/authenticateToken");
const axios = require('axios');

const CALCULATION_SERVICE_URL = 'http://localhost:6000/calculate';

const getAnsweredQuestions = async (user) => {
    const answeredQuestionIds = user.answers.map((answer) => answer.questionId);
    const answeredQuestions = await Question.find({
      _id: { $in: answeredQuestionIds },
    });

    const questionsWithAnswers = answeredQuestions.map((answeredQuestions) => {
      const answer = user.answers.find((answer) =>
        answer.questionId.equals(answeredQuestions._id)
      );
      return { question: answeredQuestions, answer: answer };
    });
    return questionsWithAnswers;
}

router.get("/greeting", authenticateToken, (req, res) => {
  try {
    res.type("text").send(`Hello ${req.user.email}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get("/questions", authenticateToken, async (req, res) => {
  try {
    const questions = await Question.find({});
    const user = await User.findOne({ email: req.user.email });
    let questionsWithAnswers = [];

    if (user && user.answers) {
      // Map each question to include the user's answer if it exists
      questionsWithAnswers = questions.map(question => {
        const answer = user.answers.find(ans => ans.questionId.equals(question._id));
        return {
          question,
          // ...question.toObject(), // Convert Mongoose document to plain object
          answer: answer ? answer.answer : null, // Include the answer or null if not answered
        };
      });
    } else {
      // If the user has no answers, return questions as is
      questionsWithAnswers = questions;
    }
    res.json(questionsWithAnswers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get("/questions/answered", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user || !user.answers) {
      return res.status(500).send("No answers found for this user.");
    }
    questionsWithAnswers = getAnsweredQuestions(user);
    res.json(questionsWithAnswers);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/questions/unanswered", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const answeredQuestionIds = user.answers.map((answer) => answer.questionId);
    const unansweredQuestions = await Question.find({
      _id: { $nin: answeredQuestionIds },
    });
    res.json(unansweredQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/answers", authenticateToken, async (req, res) => {
  const answersDict = req.body; // object format will be a dict of { questionId: answer, ... }
  try {
    // Load the user from the database
    const user = await User.findOne({ email: req.user.email });

    // Ensure user.answers is initialized as an array if it's not already
    if (!user.answers) {
      user.answers = [];
    }
    // Iterate through the submitted answers
    Object.entries(answersDict).forEach(([questionId, submittedAnswer]) => {
      // Check if an answer for the current question already exists
      const existingAnswerIndex = user.answers.findIndex(
        (answer) => answer.questionId.toString() === questionId
      );
      if (existingAnswerIndex > -1) {
        // Update existing answer
        user.answers[existingAnswerIndex].answer = submittedAnswer;;
      } else {
        // Add new answer
        user.answers.push({ questionId, answer: submittedAnswer });
      }
    });

    await user.save();
    res.status(200).send("Answers updated");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.post("/reset", authenticateToken, async (req, res) => {
  try {
    await User.updateOne(
      { email: req.user.email },
      { $set: { answers: [], zodiacSign: null } }
    );
    res.status(200).send("User answers and zodiac sign reset");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/me", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user || !user.answers) {
      return res.status(500).send("No answers found for this user.");
    }
    questionsWithAnswers = await getAnsweredQuestions(user);
    const response = await axios.post(CALCULATION_SERVICE_URL, {'user_answers': user.answers});
    res.json(response.data.result);
  } catch (error) {
    // console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
