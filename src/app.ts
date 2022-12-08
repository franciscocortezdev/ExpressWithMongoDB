import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()
import { router } from "./routes"
import cors from "cors"
import mongoose from "mongoose"

const app: Application = express()
const PORT = process.env.PORT || 3000
const DB_URI = <string>process.env.DB_URI


mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log(err.message)
  })

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log("Server started")
})
