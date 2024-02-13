//it will contain schema for the database or blueprint of how data will be stored or model
const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
    response:
    {
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

const Survey = mongoose.model('Survey',surveySchema);

module.exports = Survey;