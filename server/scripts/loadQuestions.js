require('dotenv').config(); // To use environment variables from .env file
const mongoose = require('mongoose');
const Question = require('../models/Question'); // Adjust the path as necessary

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

// Array of questions to load
const questions = [
  {
    text: 'What is your favorite color?',
    description: '',
    answerType: 'multipleChoice',
    choices: [
      { text: 'Red' },
      { text: 'Blue' },
      { text: 'Green' }
    ]
  },
  {
    text: 'Describe your ideal vacation.',
    description: '',
    answerType: 'freeEntry',
    choices: [] // Empty array for free entry type questions
  }
  // Add more questions as needed
];

// Function to load questions
async function loadQuestions() {
  try {
    for (const questionData of questions) {
      await Question.updateOne(
        { text: questionData.text }, // Unique identifier
        { $set: questionData },
        { upsert: true } // Update existing or insert new
      );
    }
    console.log('Questions loaded successfully');
  } catch (error) {
    console.error('Error loading questions:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Execute the function
loadQuestions();
