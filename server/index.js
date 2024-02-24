require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session'); // Needed for handling user sessions
const bodyParser = require('body-parser');

// Passport Config
require('./config/passport')(passport); // Importing our passport strategy configuration

const app = express();
const PORT = process.env.PORT || 5001;

// Body parser middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express session middleware
app.use(
  session({
    secret: 'secret', // TODO: Must change this && store in an environment variable
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware
app.use(passport.initialize());
app.use(passport.session());
const apiRouter = express.Router();
// Development-only middleware for disabling cache
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
      res.setHeader('Cache-Control', 'no-store');
      next();
    });
  }

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
apiRouter.use('/auth', require('./routes/authRoutes'));
apiRouter.use('/survey', require('./routes/surveyRoutes'));

apiRouter.get('/', (req, res) => {
    if (req.user) {
      // User is logged in
      res.type('text').send(`Hello ${req.user.email}`);
    } else {
      // User is not logged in
      res.type('text').send('Hello World');
    }
  });

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the server. Use /api to access the API routes.');
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
