const SurveyModel=require('../models/SurveyModel')

module.exports.getSurvey = async (req,res) => {
    const survey = await SurveyModel.find({}) //this will give us all the todo
    res.send(survey);
}

module.exports.createSurvey = async (req,res) => {
    const text = req.body

    SurveyModel
        .create({response:text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
}