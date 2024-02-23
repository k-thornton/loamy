const express = require('express');
const { isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();
const Survey = require('../models/Survey');

// Fetch all surveys for management
router.get('/surveys', isAdmin, async (req, res) => {
    const surveys = await Survey.find();
    res.render('admin/surveys', { surveys });
});

// Route to the form for creating a new survey
router.get('/surveys/new', isAdmin, (req, res) => {
    res.render('admin/new-survey');
});

// Route for submitting the creation of a new survey
router.post('/surveys', isAdmin, async (req, res) => {
    const { title, description, questions } = req.body; // Simplified; adjust according to your form structure
    const newSurvey = new Survey({ title, description, questions });
    await newSurvey.save();
    res.redirect('/admin/surveys');
});

// Add routes for editing and deleting surveys as needed
