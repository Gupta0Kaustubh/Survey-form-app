const SurveyModel=require('../models/SurveyModel')

//this will give us all the Survey
module.exports.getSurvey = async (req,res) => {
    const survey = await SurveyModel.find({}) 
    res.send(survey);
}

//this will help us to post the data

module.exports.createSurvey = async (req,res) => {
    console.log(req)
    const text = req.body

    SurveyModel
        .create({response:text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
}