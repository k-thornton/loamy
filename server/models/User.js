const mongoose = require('mongoose');
const { calculateZodiacSign } = require('../services/zodiacService');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  answers: [{
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    answer: {
      type: mongoose.Schema.Types.Mixed, // Can store either a String or an Array of Strings
      required: true
    }
  }],
  zodiacSign: {
    type: String, // The result from their answers, could be null initially
    default: null
  }
});

// Adding calculateZodiacSign as an instance method
userSchema.methods.calculateZodiacSign = async function() {
  return await calculateZodiacSign(this);
};

module.exports = mongoose.model('User', userSchema);
