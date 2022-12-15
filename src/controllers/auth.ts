import { Request, Response } from "express"

import { handleError } from "../utils/handleError"


export const registerUser = async (req: Request, res: Response) => {
  const {body} = req
  try {
    res.send({ data: 'registrado' })
  } catch (error) {
    handleError(res, "ERROR_REGISTER")
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
  
    res.send({ data: 'started session' })
  } catch (error) {
    handleError(res, "ERROR_LOGIN")
  }
}