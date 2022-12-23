import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"
import { Application } from "express"

const swaggerOptions={
  swaggerDefinition:{
    info: {
      version: "1.0.0",
      title: "API Documentation",
      description: "API Documentation for App of Tasks",
      
    }
  },
  apis:["src/routes/task.ts"]
}

const options ={
  definition:{
    openapi: "3.0.0",
    info:{
      title: "API Documentation",
      version: "1.0.0"
    }
  },
  apis:["src/routes/task.ts"]
}

const swaggerSpec = swaggerJSDoc(options)

export const swaggerDocs = (app: Application, port:number)=>{
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}