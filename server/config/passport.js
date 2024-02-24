const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID, // Ensure these are set in your .env file or environment
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      // Extract relevant information from the profile
      const newUser = {
        googleId: profile.id,
        email: profile.emails[0].value,
        // You can add more fields as needed, based on the profile object
      };

      try {
        // Check for an existing user
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          done(null, user); // User exists, proceed to login
        } else {
          // If user doesn't exist, create a new user
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (error) {
        console.error(error);
        done(error, null);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);  // This might need to be user._id
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
  
};
