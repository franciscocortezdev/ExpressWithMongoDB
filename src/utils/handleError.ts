import { Response } from "express";

export const handleError = (res: Response, error:string, code: number = 500) =>{
  res.status(code);
  res.send({ error });
}

