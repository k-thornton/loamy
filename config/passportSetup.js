const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Make sure to create this model

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // Check if user already exists in our db
    User.findOne({ googleId: profile.id }).then((currentUser) => {
      if (currentUser) {
        // User already exists
        done(null, currentUser);
      } else {
        // If not, create user in our db
        new User({
          googleId: profile.id,
          username: profile.displayName,
          // Add any other details you want to save
        }).save().then((newUser) => {
          done(null, newUser);
        });
      }
    });
  }
));
