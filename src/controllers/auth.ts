import { Request, Response } from "express"
import { handleError } from "../utils/handleError"
import { userLogin, userRegister } from "../services/auth"
import { encrypt, decrypt } from "../utils/handleBcrypt"
import { generateToken } from "../utils/handleJWT"
import { matchedData } from "express-validator/src/matched-data"
import { AuthInterface } from "../interfaces/authInterface"
import { UserInterface } from "../interfaces/userInterface"

export const loginUser = async (req: Request, res: Response) => {
  const body = matchedData(req) as AuthInterface

  try {
    const response = await userLogin(body.email)
    if (!response) return handleError(res, "ERROR_USER_NOT_FOUND")
    const passDecrypt = await decrypt(body.password, response.password)
    if (!passDecrypt) return handleError(res, "ERROR_PASSWORD")
    const toke = generateToken({ ...body, _id: response._id })

    const user = {
      user: response.nombre,
      email: response.email,
    }
    res.send({
      token: toke,
      data: user,
    })
  } catch (error) {
    handleError(res, "ERROR_LOGIN")
  }
}

export const registerUser = async (req: Request, res: Response) => {
  const body = matchedData(req) as UserInterface

  try {
    const userExist = await userLogin(body.email)
    if (userExist) return handleError(res, "ERROR_USER_ALREADY_EXISTS")
    const passEncrypt = await encrypt(body.password)
    const response = await userRegister({ ...body, password: passEncrypt })
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_REGISTER")
  }
}
