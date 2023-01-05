import cors from "cors"
import dotenv from "dotenv"
import express, { Application } from "express"
import swaggerUi from "swagger-ui-express"
import dbConnect from "./config/mongoConnection"
import { swaggerSpec } from "./docs/swagger"
import { router } from "./routes"
dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use("/", router)
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

dbConnect()
  .then(() => console.log("Database conected"))
  .catch(() => console.log("Database connection error"))

app.listen(PORT, () => {
  console.log("Server started")
})
