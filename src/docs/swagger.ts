import swaggerJSDoc from "swagger-jsdoc"


const options ={
  definition:{
    openapi: "3.0.0",
    info:{
      title: "Tasks Mangment API Documentation",
      description: "This is the api doc for Tasks Mangment",
      version: "1.0.0"
    }
  },
  apis:["src/routes/*.ts"]
}

export const swaggerSpec = swaggerJSDoc(options)

