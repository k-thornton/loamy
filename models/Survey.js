const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  title: String,
  description: String,
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Survey', surveySchema);
