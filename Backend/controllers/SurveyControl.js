// Importing the SurveyModel
const SurveyModel = require('../models/SurveyModel');

// This endpoint returns all surveys
module.exports.getSurvey = async (req, res) => {
    // Fetch all surveys from the database
    const survey = await SurveyModel.find({});
    
    // Send the survey data as the response
    res.send(survey);
}

// This endpoint allows posting new survey data
module.exports.createSurvey = async (req, res) => {
    // Extracting survey text from the request body
    const text = req.body;

    // Creating a new survey record in the database
    SurveyModel.create({ response: text })
        .then((data) => {
            // Log success message when survey is added
            console.log("Survey added successfully...");
            // Send the newly created survey data as the response
            res.send(data);
        })
        .catch((error) => {
            // Handle errors if any
            console.error("Error adding survey:", error.message);
            res.status(500).send("Internal Server Error");
        });
}
