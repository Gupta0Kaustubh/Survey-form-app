//it will contain schema for the database or blueprint of how data will be stored or model
const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
    response:Object
})

const Survey = mongoose.model('Survey',surveySchema);

module.exports = Survey;