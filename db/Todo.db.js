import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("connected to the database");
} catch (error) {
  console.log(error);
}

export default mongoose;
