function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    // Redirect the user to login page if not authenticated
    res.redirect('/auth/google'); // Adjust the redirect URL as needed
}

module.exports = { isLoggedIn };
