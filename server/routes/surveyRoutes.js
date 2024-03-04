const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const User = require('../models/User');
const authenticateToken = require('../middleware/authenticateToken');
const calculateZodiacSign = require('../services/zodiacService');

router.get('/questions/answered', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user || !user.answers) {
      return res.status(404).send('No answers found for this user.');
    }

    const answeredQuestionIds = user.answers.map(answer => answer.questionId);
    const answeredQuestions = await Question.find({ _id: { $in: answeredQuestionIds } });

    const questionsWithAnswers = answeredQuestions.map(answeredQuestions => {
      const answer = user.answers.find(answer => answer.questionId.equals(answeredQuestions._id));
      return { question: answeredQuestions, answer: answer };
    });

    res.json(questionsWithAnswers);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get('/questions/unanswered', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const answeredQuestionIds = user.answers.map(answer => answer.questionId);
    const unansweredQuestions = await Question.find({ _id: { $nin: answeredQuestionIds } });
    res.json(unansweredQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/answers', authenticateToken, async (req, res) => {
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
          const existingAnswerIndex = user.answers.findIndex(answer => answer.questionId.toString() === questionId);
          if (existingAnswerIndex > -1) {
              // Update existing answer
              user.answers[existingAnswerIndex].answer = submittedAnswer;
          } else {
              // Add new answer
              user.answers.push({ questionId, answer: submittedAnswer });
          }
      });

      await user.save();
      // const zodiacSign = await calculateZodiacSign(user);
      // res.status(200).json(zodiacSign).send('Answers updated');
      res.status(200).send('Answers updated');
  } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
  }
});

  
router.post('/reset', authenticateToken, async (req, res) => {
    try {
      await User.updateOne({ email: req.user.email }, { $set: { answers: [], zodiacSign: null } });
      res.status(200).send('User answers and zodiac sign reset');
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  });

  router.get('/me', authenticateToken, async (req, res) => {
    try {
      const user = await User.findOne({ email: req.user.email });
      const zodiacSign = await calculateZodiacSign(user);
      res.json(zodiacSign);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  });
  

module.exports = router;
