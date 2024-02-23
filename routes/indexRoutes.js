const express = require('express');
const router = express.Router();

// Main page route
router.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

module.exports = router;
