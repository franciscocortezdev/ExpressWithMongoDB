import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

const dbConnect = async () => {
  const DB_URI = <string>process.env.DB_URI
  await mongoose.connect(DB_URI)
}

export default dbConnect
