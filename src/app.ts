import express, { Application, Request, Response } from "express";
import { router } from "./routes";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hola mundo ");
});

app.use(router);

app.listen(3000, () => {
  console.log("Server started");
});
