// Importing the mongoose library to define the schema
const mongoose = require('mongoose');

// Defining the schema for the survey data
const surveySchema = new mongoose.Schema({
    response: {
        product: String,
        name: String,
        email: String,
        phone: String,
        question1: String,
        question2: String,
        question3: String,
        question4: String,
        question5: String,
        question6: String,
        question7: String,
        question8: String,
        comment: String
    }
});

// Creating a mongoose model based on the survey schema
const Survey = mongoose.model('surveys', surveySchema);

// Exporting the Survey model to be used in other files
module.exports = Survey;
