import { Response } from "express";

export const handleError = (res: Response, errorSend:string|object, code: number = 500) =>{
  res.status(code);
  res.send({ error: errorSend });
}

