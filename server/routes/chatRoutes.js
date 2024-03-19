const express = require('express');
const router = express.Router();
const axios = require('axios');
const authenticateToken = require("../middleware/authenticateToken");
const User = require("../models/User");

const CHAT_SERVICE_URL = 'http://127.0.0.1:7000/chat';

// POST endpoint for receiving messages and sending replies
router.post('/', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const userId = user._id;
    const userMessage = req.body.message;
    const data = { 'user_input': userMessage, 'user_id': userId.toString() }
    const reply = await axios.post(CHAT_SERVICE_URL, data, {headers: {
      'Content-Type': 'application/json',
    }});
    res.json({ reply: reply.data.output });
  } catch (error) {
    console.error("Axios error details:", error.response?.data, error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;