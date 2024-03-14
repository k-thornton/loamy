// models/Question.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  tag: { type: String, required: false },
  description: { type: String, required: false },
  faq: [faqSchema],
  note: { type: String, required: false },
  answerType: { type: String, required: true },
  expectedDataType: { type: String, required: true },
  choices: { type: Array, required: false }
});

module.exports = mongoose.model('Question', questionSchema);
