const express = require('express');
const router = express.Router();
const { chatServiceClient } = require("../config/axiosConfig");
const authenticateToken = require("../middleware/authenticateToken");
const User = require("../models/User");


router.post('/', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const userId = user._id;
    const userMessage = req.body.message;
    const data = { 'user_input': userMessage, 'user_id': userId.toString() }
    const reply = await chatServiceClient.post('/chat', data, {headers: {
      'Content-Type': 'application/json',
    }});
    res.json({ reply: reply.data.output });
  } catch (error) {
    console.error("Axios error details:", error.response?.data, error.message);
    res.status(500).json({ error: `Internal Server Error: ${error.response?.data} ${error.message}` });
  }
});

module.exports = router;