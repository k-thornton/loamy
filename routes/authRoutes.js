const router = require('express').Router();
const passport = require('passport');

// Trigger Google OAuth flow
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route for Google to redirect to
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
