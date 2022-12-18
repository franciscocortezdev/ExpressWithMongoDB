import { Request, Response } from "express"
import { handleError } from "../utils/handleError"
import { userLogin, userRegister } from "../services/auth"
import { encrypt, decrypt } from "../utils/handleBcrypt"
import { generateToken } from "../utils/handleJWT"

export const loginUser = async (req: Request, res: Response) => {
  const { body } = req

  try {
    const response = await userLogin(body)
    if(!response) return handleError(res, "ERROR_USER_NOT_FOUND")
    const passDecrypt = await decrypt(body.password, response.password)
    if(!passDecrypt) return handleError(res, "ERROR_PASSWORD")
    const toke = generateToken(body)
    
    res.send({ token: toke, data: response })
  } catch (error) {
    handleError(res, "ERROR_LOGIN")
  }
}

export const registerUser = async (req: Request, res: Response) => {
  const { body } = req
  try {
    const passEncrypt = await encrypt(body.password)
    const response = await userRegister({...body, password: passEncrypt})
    res.send({ data: response})
  } catch (error) {
    handleError(res, "ERROR_REGISTER")
  }
}
