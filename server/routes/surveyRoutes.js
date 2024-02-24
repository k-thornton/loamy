const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const User = require('../models/User');
const authenticateToken = require('./middleware/authenticateToken');


router.get('/questions/unanswered', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ googleId: req.user.googleId });
    const answeredQuestionIds = user.answers.map(answer => answer.questionId);
    const unansweredQuestions = await Question.find({ _id: { $nin: answeredQuestionIds } });
    res.json(unansweredQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/answers', authenticateToken, async (req, res) => {
    const { answers } = req.body; // Assume answers is an array of { questionId, answer }
    try {
      const user = await User.findOne({ googleId: req.user.googleId });
      user.answers.push(...answers);
      await user.save();
      res.status(200).send('Answers saved');
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
router.post('/user/reset', authenticateToken, async (req, res) => {
    try {
      await User.updateOne({ googleId: req.user.googleId }, { $set: { answers: [], zodiacSign: null } });
      res.status(200).send('User answers and zodiac sign reset');
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  

module.exports = router;
