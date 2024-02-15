const { Router } = require('express');
const { getSurvey, createSurvey } = require('../controllers/SurveyControl');

// Create a new Router instance
const router = Router();

// Define routes for retrieving surveys and adding new surveys
router.get('/', getSurvey); // Route for retrieving surveys
router.post('/add', createSurvey); // Route for adding a new survey

// Export the router for use in other modules
module.exports = router;
