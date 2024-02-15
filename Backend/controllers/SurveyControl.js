const SurveyModel = require('../models/SurveyModel');

//this will give us all the Survey
module.exports.getSurvey = async (req,res) => {
    const survey = await SurveyModel.find({}) 
    res.send(survey);
}

//this will help us to post the data

module.exports.createSurvey = async (req,res) => {
    console.log(req)
    const text = req.body

        // Create a new survey record in the database
        SurveyModel.create({ response: text })
            .then((data) => {
                // Log success message and send the created survey as a response
                console.log("Survey added successfully...");
                console.log(data);
                res.send(data);
            });
    } catch (error) {
        // Handle errors that occur during the creation process
        console.error("Error while creating survey:", error);
        res.status(500).send("Internal Server Error");
    }
}
