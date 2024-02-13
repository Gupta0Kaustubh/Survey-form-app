// const mongoose=require('mongoose')
// const connectDB = async () =>{
//     const URL="mongodb+srv://sumitkumar:Jvt5sSKlwdMho2I3@cluster0.uvyjppv.mongodb.net/?retryWrites=true&w=majority";

//     const conn = await mongoose.connect(URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log(`MongoDB Coneected: ${conn.connection.host}`);
//     };
    
//     module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const URL = "mongodb+srv://sumitkumar:Jvt5sSKlwdMho2I3@cluster0.uvyjppv.mongodb.net/?retryWrites=true&w=majority";
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
