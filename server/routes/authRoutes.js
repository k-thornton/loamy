const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwt = require('jsonwebtoken');


// Function to verify the ID token received from the frontend
async function verifyToken(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, 
  });
  const payload = ticket.getPayload();
  return payload; // This object includes user's information
}

// Route to handle Google Sign-In
router.post('/google', async (req, res) => {
  try {
    const { token } = req.body; // Assuming the frontend sends the ID token in the body with key 'token'
    const payload = await verifyToken(token);
    console.log(req);
    
    // Extract user details
    const { sub: googleId, email } = payload;

    // Check if the user already exists
    let user = await User.findOne({ googleId });
    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({ googleId, email });
      await user.save();
    }

    const userPayload = {
        id: user._id,
        email: user.email
    };

    const jwtToken = jwt.sign(
    userPayload,
    process.env.JWT_SECRET, // Ensure you have a JWT_SECRET in your .env
    { expiresIn: '24h' } // Token expires in 24 hours
    ); 

    // Here, implement your logic to create or update the user in your database
    // and manage session or JWT token as needed

    res.json({ message: 'User logged in/registered successfully', user: userPayload, token: jwtToken });
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ message: 'Authentication failed', error: error.toString() });
  }
});

// Logout route
// The implementation of logout depends on how you manage sessions or authentication tokens
router.post('/logout', (req, res) => {
  // Example: Clearing a session or invalidating a JWT token
  // This is highly dependent on your session management strategy
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
