const mongoose = require('mongoose');

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
userSchema.methods.calculateZodiacSign = function() {
  const concatenatedAnswers = this.answers.map(a => a.answer).join('');
  
  const hash = crypto.createHash('md5').update(concatenatedAnswers).digest('hex');
  const index = parseInt(hash.substring(0, 8), 16) % 12;
  
  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const zodiacSign = zodiacSigns[index]; // Store the calculated zodiacSign into the user's profile.  Maybe this isn't good?
  this.zodiacSign = zodiacSign;
  return {'zodiac': zodiacSign, 'hash': hash, 'index': index};
};

module.exports = mongoose.model('User', userSchema);
