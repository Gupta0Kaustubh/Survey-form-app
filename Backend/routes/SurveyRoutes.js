const {Router}= require('express');
const { getSurvey,createSurvey } = require('../controllers/SurveyControl');

const router=Router();

router.get('/',getSurvey)
router.post('/add',createSurvey);

module.exports=router;