function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    // Redirect the user to login page if not authenticated
    res.redirect('/auth/google'); // Adjust the redirect URL as needed
}

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return next();
    }
    res.status(403).send('Access denied');
}


module.exports = { isLoggedIn };
