require('dotenv').config(); // To use environment variables from .env file
const mongoose = require('mongoose');
const Question = require('../models/Question'); // Adjust the path as necessary
const fs = require('fs').promises;
const path = require('path');


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));


// Function to load questions
async function loadQuestions(filePath) {
  try {
    // Read the file content
    const data = await fs.readFile(filePath, 'utf8');
    // Parse the JSON content
    const questions = JSON.parse(data);
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


// Specify the path to your JSON file
const fileName = './questions.json';
// Construct the absolute path to the JSON file
const filePath = path.join(__dirname, fileName);

// Execute the function
loadQuestions(filePath);
