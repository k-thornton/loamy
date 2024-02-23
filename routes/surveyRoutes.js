const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/authMiddleware');

// Models
const Survey = require('../models/Survey');
const Answer = require('../models/Answer');

// Display the survey form
router.get('/:id', isLoggedIn, async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);
        res.render('survey', { survey });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

// Handle survey submission
router.post('/submit', isLoggedIn, async (req, res) => {
    try {
        const { responses } = req.body; // Adjust based on your form structure
        const newAnswer = new Answer({
            survey: req.body.surveyId, // Make sure to include surveyId in your form
            user: req.user._id,
            responses // This should be an array or object capturing the user's responses
        });
        await newAnswer.save();
        res.redirect(`/survey/results/${newAnswer._id}`); // Redirect to a results page, passing the answer ID for retrieval
    } catch (error) {
        console.error(error);
        res.redirect('/'); // Redirect to home or error page as fallback
    }
});


// Display the results page
router.get('/results', isLoggedIn, async (req, res) => {
    try {
        // Find the most recent answers by the current user
        const latestAnswer = await Answer.findOne({ user: req.user._id })
                                         .sort({ createdAt: -1 }) // Sort by creation time, descending
                                         .populate('survey'); // Optionally populate the survey details if needed

        if (!latestAnswer) {
            return res.status(404).send('No survey answers found.');
        }

        // Assuming you have a mechanism to calculate the score based on the answers
        const score = calculateScore(latestAnswer); // Implement this function based on your scoring logic

        // Render the results page with the score
        res.render('results', { score });
    } catch (error) {
        console.error(error);
        res.redirect('/'); // Redirect to home or an error page as a fallback
    }
});



module.exports = router;
