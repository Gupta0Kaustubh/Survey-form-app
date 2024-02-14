
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
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
