const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const Handlebars = require('express-handlebars');
const authRoutes = require('./routes/authRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const indexRoutes = require('./routes/indexRoutes');

const app = express();

// Setup Handlebars
app.engine('hbs', Handlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/survey', surveyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
