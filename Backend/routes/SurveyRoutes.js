// Importing the Router from Express
const { Router } = require('express');

// Importing controller functions for survey routes
const { getSurvey, createSurvey } = require('../controllers/SurveyControl');

// Creating an instance of the Express Router
const router = Router();

// Defining a route to handle GET requests for retrieving all surveys
router.get('/', getSurvey);

// Defining a route to handle POST requests for adding new surveys
router.post('/add', createSurvey);

// Exporting the router to be used in other files
module.exports = router;
