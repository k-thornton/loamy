const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [String], // For multiple-choice questions; leave empty for open-ended questions
  // Add any additional fields you might need for a question
});

module.exports = mongoose.model('Question', questionSchema);
