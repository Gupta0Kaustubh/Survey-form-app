// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const cors = require('cors');

// Importing survey routes
const routes = require('./routes/SurveyRoutes');

// Loading environment variables from a .env file
require('dotenv').config();

// Creating an instance of the Express app
const app = express();

// Middleware: Parsing JSON and enabling CORS
app.use(express.json());
app.use(cors());

// Routes: Using the defined survey routes
app.use(routes);

// Setting up the server to listen on a specified port or defaulting to 3000
const port = process.env.PORT || 3000;

// Starting the server and logging a message when it's listening
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Connecting to the MongoDB database
connectDB();
