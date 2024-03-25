require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("../models/Question"); // Adjust the path as necessary
const fs = require("fs").promises;
const path = require("path");

async function loadQuestions(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const questionsFromFile = JSON.parse(data);

    for (const questionData of questionsFromFile) {
      // Check if the question exists and is different
      const existingQuestion = await Question.findOne({ text: questionData.text }).lean();

      if (!existingQuestion || JSON.stringify(existingQuestion) !== JSON.stringify(questionData)) {
        await Question.updateOne(
          { text: questionData.text },
          { $set: questionData },
          { upsert: true }
        );
      }
    }

    // Consider the implications of removing questions not present in the file here

    console.log("Questions synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing questions:", error);
  } finally {
    mongoose.connection.close();
  }
}

const fileName = "./questions.json";
const filePath = path.join(__dirname, fileName);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .then(() => loadQuestions(filePath))
  .catch((err) => console.error("Database connection error:", err));
