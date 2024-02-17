// Importing the mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Fetching the MongoDB connection URL from the environment variables
    const URL = process.env.MONGODB_URI;

    // Establishing a connection to the MongoDB database
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Logging a successful connection message
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Handling errors if the MongoDB connection fails
    console.error('MongoDB connection failed:', error.message);

    // Exiting the application with a failure status
    process.exit(1);
  }
};

// Exporting the connectDB function to be used in other files
module.exports = connectDB;
