const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  tooltip: { type: String, required: false }, // Tooltip for each choice
  tag: { type: String, required: false }
});

const questionSchema = new mongoose.Schema({
  questionNumber: { type: Number, required: true },
  tag: { type: String, required: true },
  text: { type: String, required: true },
  description: { type: String, required: false },
  subHeading: { type: String, required: false },
  tooltip: { type: String, required: false }, // General tooltip for the question itself
  answerType: { type: String, required: true },
  expectedDataType: { type: String, required: true },
  defaultValue: {type: Number, required: false},
  minValue: {type: Number, required: false},
  maxValue: {type: Number, required: false},
  choices: [choiceSchema],
  note: { type: String, required: false }
});

module.exports = mongoose.model('Question', questionSchema);
