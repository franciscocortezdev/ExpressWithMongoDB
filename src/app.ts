import express, { Application } from "express"
import { router } from "./routes"
import cors from "cors"
import dbConnect from "./config/mongoConnection"
import dotenv from "dotenv"
dotenv.config()
import { swaggerSpec } from "./docs/swagger"
import swaggerUi from "swagger-ui-express"

const app: Application = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/',router)
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

dbConnect()
  .then((result) => console.log("Database conected"))
  .catch((error) => console.log("Database connection error"))

app.listen(PORT, () => {
  console.log("Server started")
 
})
