// This is unused, but would be if we wanted to decouple zodiac calculation from the user model.

const crypto = require('crypto');
const User = require('../models/User');

// Dummy function to represent fetching user's answers
async function fetchUsersAnswers(user) {
  // Fetch user's answers from the database
  // For demonstration, return an array of answers
  return ['answer1', 'answer2', 'answer3'];
}

// Function to calculate zodiac sign
async function calculateZodiacSign(userId) {
  const answers = await fetchUsersAnswers(userId);
  const concatenatedAnswers = answers.join('');

  // Generate MD5 hash of the concatenated answers
  const hash = crypto.createHash('md5').update(concatenatedAnswers).digest('hex');

  // Convert the first 8 characters of hash to a number, then calculate modulo-12
  const index = parseInt(hash.substring(0, 8), 16) % 12;

  // Array of zodiac signs for mapping
  const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  return zodiacSigns[index];
}

// Example usage
calculateZodiacSign('user123').then(zodiacSign => {
  console.log(`The calculated zodiac sign is: ${zodiacSign}`);
});
