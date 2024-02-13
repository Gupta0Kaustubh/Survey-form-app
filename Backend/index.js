const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./db');
const cors=require('cors');

const routes=require('./routes/SurveyRoutes')

connectDB();

const app=express();


const port=3000;

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(port,() =>{
    console.log(`Example app listening on ${port}`)
})