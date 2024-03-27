const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const User = require("../models/User");
const authenticateToken = require("../middleware/authenticateToken");
const { calcServiceClient } = require("../config/axiosConfig");

async function fetchQuestions(user, filter = "all") {
  // Fetch all current questions from the database regardless of the filter
  const allQuestions = await Question.find({});

  let questionsWithAnswers = allQuestions.map((question) => {
    if (!user) {
      return {
        question: question.toObject(),
        answer: null,
      };
    }
    // Find if the user has answered this question
    const answerObj = user.answers.find((ans) =>
      ans.questionId.equals(question._id)
    );
    return {
      question: question.toObject(), // Convert Mongoose document to a plain object
      answer: answerObj ? answerObj.answer : null, // Attach the answer if present; otherwise null
    };
  });

  // If the filter is not 'all', adjust the returned data accordingly
  if (filter !== "all") {
    questionsWithAnswers = questionsWithAnswers.filter((qwa) => {
      // For 'answered', return only questions with non-null answers
      if (filter === "answered") return qwa.answer !== null;
      // For 'unanswered', return only questions with null answers
      if (filter === "unanswered") return qwa.answer === null;
      return true;
    });
  }

  return questionsWithAnswers;
}

// Utility function to determine if an answer matches the expected data type
const isAnswerValid = async (questionId, answer) => {
  const question = await Question.findById(questionId);

  // Handle different expected data types more granularly
  switch (question.expectedDataType) {
    case "numeric":
      return !isNaN(parseFloat(answer)) && isFinite(answer);
    case "string":
      // Potentially add more specific string validation here if needed
      return typeof answer === "string";
    // Extend with more cases as needed
    default:
      return false;
  }
};

router.get("/questions", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const questionsWithAnswers = await fetchQuestions(user);
    res.json(questionsWithAnswers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get("/questions/answered", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const answeredQuestions = await fetchQuestions(user, "answered");
    res.json(answeredQuestions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get("/questions/unanswered", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const unansweredQuestions = await fetchQuestions(user, "unanswered");
    res.json(unansweredQuestions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/answers", authenticateToken, async (req, res) => {
  const answersDict = req.body; // Object format: { questionId: answer, ... }

  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Iterate through the submitted answers
    for (const [questionId, submittedAnswer] of Object.entries(answersDict)) {
      const valid = await isAnswerValid(questionId, submittedAnswer);
      if (!valid) {
        // Immediately return if any answer is invalid
        return res
          .status(400)
          .send(`Invalid answer for question ${questionId}`);
      }

      // Check if an answer for the current question already exists
      const existingAnswerIndex = user.answers.findIndex(
        (answer) => answer.questionId.toString() === questionId
      );
      if (existingAnswerIndex > -1) {
        // Update existing answer
        user.answers[existingAnswerIndex].answer = submittedAnswer;
      } else {
        // Add new answer
        user.answers.push({ questionId, answer: submittedAnswer });
      }
    }

    await user.save();
    res.status(200).send("Answers updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.post("/reset", authenticateToken, async (req, res) => {
  try {
    await User.updateOne({ email: req.user.email }, { $set: { answers: [] } });
    res.status(200).send("User answers reset");
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
    const userAnswers = await fetchQuestions(user, "answered");

    // Pre-fetch all questions to find tags for answers
    const allQuestions = await Question.find({});
    const questionTagToChoiceTagMap = allQuestions.reduce((acc, question) => {
      if (question.answerType === "multipleChoice") {
        acc[question.tag] = question.choices.reduce((choiceMap, choice) => {
          choiceMap[choice.text] = choice.tag; // Map text answer to tag
          return choiceMap;
        }, {});
      }
      return acc;
    }, {});

    const familiarity =
      questionTagToChoiceTagMap["familiarity"][
        // I want to work with familiarity as a number for persona calculation
        // TODO: Will likely want to generalize this so all multiple choice questions have tagged answer options
        userAnswers.find((item) => item.question.tag === "familiarity").answer
      ];

    const stage =
      questionTagToChoiceTagMap["stage"][
        // Doing the same for stage
        userAnswers.find((item) => item.question.tag === "stage").answer
      ];

    const goal =
      questionTagToChoiceTagMap["goal"][
        // Doing the same for stage
        userAnswers.find((item) => item.question.tag === "goal").answer
      ];

    const userInfo = {
      age: userAnswers.find((item) => item.question.tag === "age")?.answer,
      amh: userAnswers.find((item) => item.question.tag === "amh")?.answer,
      diagnosis: userAnswers.find((item) => item.question.tag === "diagnosis")
        ?.answer,
      afc: userAnswers.find((item) => item.question.tag === "afc")?.answer,
      location: userAnswers.find((item) => item.question.tag === "location")
        ?.answer,
      goal: goal,
      familiarity: familiarity,
      stage: stage,
    };

    const response = await calcServiceClient.post("/calculate", userInfo);
    res.json(response.data.result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
