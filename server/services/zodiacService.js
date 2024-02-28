const crypto = require('crypto');
const User = require('../models/User');

// Function to calculate zodiac sign
// Placeholder right now is just concatenating the answers, hashing, and then modulo'ing with 12 to pick a zodiac sign
async function calculateZodiacSign(user) {
  const userAnswers = user.answers.map(a => a.answer);
  const concatenatedAnswers = userAnswers.join('');
  
  const hash = crypto.createHash('md5').update(concatenatedAnswers).digest('hex');
  const index = parseInt(hash.substring(0, 8), 16) % 12;
  
  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const zodiacSign = zodiacSigns[index];
  return {'zodiac': zodiacSign, 'hash': hash, 'index': index, 'hashedValue': concatenatedAnswers, 'userAnswers': userAnswers};
}

module.exports = calculateZodiacSign;