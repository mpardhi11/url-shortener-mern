import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file
async function connectDB() {
  try {
    const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);

    console.log("connect.connection.host: ", connect.connection.host);
    console.log("connect.connection.name: ", connect.connection.name);
  } catch (error) {
    console.log("connectDB ~ error: ", error);
    process.exit(1);
  }
}

export default connectDB;
