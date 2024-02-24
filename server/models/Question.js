const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  answerType: {
    type: String,
    enum: ['multipleChoice', 'freeEntry'],
    required: true
  },
  choices: [{
    text: {
      type: String,
    }
  }]
});

module.exports = mongoose.model('Question', questionSchema);
