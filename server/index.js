require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session'); // Needed for handling user sessions
const bodyParser = require('body-parser');
const authenticateToken = require('./middleware/authenticateToken');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

const app = express();
const PORT = process.env.PORT || 5001;

// Body parser middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
const apiRouter = express.Router();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
apiRouter.use('/auth', require('./routes/authRoutes'));
apiRouter.use('/survey', require('./routes/surveyRoutes'));

apiRouter.get('/', authenticateToken, (req, res) => {
    if (req.user) {
      // User is logged in
      res.type('text').send(`Hello ${req.user.email}`);
    } else {
      // User is not logged in
      // At the moment this code is unreachable due to the middleware's behavior
      res.type('text').send('Hello World');
    }
  });

app.use('/api', apiRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Welcome to the server. Use /api to access the API routes.');
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
