
import mongoose from "mongoose";
import { MONGODB_URI } from '../config/development.js'

export async function DBconnection() {
  try {
    const db = await mongoose.connect(MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connection established to " + db.connection.name)
  } catch (error) {
  }
}
