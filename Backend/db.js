
const mongoose = require('mongoose');
// Connecting to the database
const connectDB = async () => {
  try {
    const URL = process.env.MONGODB_URI;
      // const URL = "mongodb://localhost:27017/surveyform"
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Log a success message if connected
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log an error message and exit the process with failure if connection fails
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Export the connectDB function for use in other modules
module.exports = connectDB;
