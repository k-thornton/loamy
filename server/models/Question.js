const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  tooltip: { type: String, required: false } // Optional tooltip for each choice
});

const questionSchema = new mongoose.Schema({
  tag: { type: String, required: true },
  text: { type: String, required: true },
  description: { type: String, required: false },
  subHeading: { type: String, required: false },
  tooltip: { type: String, required: false }, // General tooltip for the question itself
  answerType: { type: String, required: true },
  expectedDataType: { type: String, required: true },
  choices: [choiceSchema], // Use the choiceSchema for choices
  note: { type: String, required: false } // Additional notes for the question
});

module.exports = mongoose.model('Question', questionSchema);
