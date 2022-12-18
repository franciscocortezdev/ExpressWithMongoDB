import { Request, Response } from "express"

import { handleError } from "../utils/handleError"
import { userLogin, userRegister } from "../services/auth"

export const loginUser = async (req: Request, res: Response) => {
  const { body } = req

  try {
    const response = await userLogin(body)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_LOGIN")
  }
}

export const registerUser = async (req: Request, res: Response) => {
  const { body } = req
  try {

    const response = await userRegister(body)
    res.send({ data: response })
  } catch (error) {
    console.log(error)
    handleError(res, "ERROR_REGISTER")
  }
}
