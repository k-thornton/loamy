const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  if (token == null) {
    return res.sendStatus(401); // If no token is present, return an unauthorized status
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // If the token is not valid, return a forbidden status
    }

    req.user = user; // Attach the decoded user payload to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;