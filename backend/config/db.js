const mongoose = require('mongoose')

const connectDB = async () => {

 
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit()
  }
 
}
module.exports = connectDB;