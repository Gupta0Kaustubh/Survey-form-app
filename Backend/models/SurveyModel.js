const mongoose = require('mongoose');

// Define the schema for the survey data
const surveySchema = new mongoose.Schema({
    response:
    {   product: String,
        name: String,
        email: String,
        phone:  String,
        question1: String ,
        question2:  String,
        question3:  String,
        question4:  String,
        question5:  String,
        question6:  String,
        question7:  String,
        question8:  String,
         comment:  String
            }
})

const Survey = mongoose.model('surveys',surveySchema);

// Export the Survey model for use in other modules
module.exports = Survey;
