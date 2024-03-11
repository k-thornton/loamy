const express = require('express');
const router = express.Router();
const chatController = require('../services/chatService');

// POST endpoint for receiving messages and sending replies
router.post('/', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const reply = await chatController.processMessage(userMessage);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
