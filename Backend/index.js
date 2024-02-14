const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./db');
const cors=require('cors');
 
const routes=require('./routes/SurveyRoutes')
 
require('dotenv').config()
 
//Create Express app
const app=express();
 
//Middleware
app.use(express.json())
app.use(cors())
 
// Routes
app.use(routes)
 
//start the server
const port=process.env.PORT||3000;
 
app.listen(port,() =>{
    console.log(`Example app listening on ${port}`)
})
 
 
connectDB();