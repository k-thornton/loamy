const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  answers: {
    type: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        answer: {
          type: mongoose.Schema.Types.Mixed, // Can store either a String or an Array of Strings
          required: true,
        },
      },
    ],
    default: [],
  },
  zodiacSign: {
    type: String, // The result from their answers, could be null initially
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
