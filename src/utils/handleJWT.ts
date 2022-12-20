import dotenv from "dotenv"
dotenv.config()
import { Secret, sign, verify } from "jsonwebtoken"
import { AuthInterface } from "../interfaces/authInterface"

const secretJWT = process.env.JWT_SECRET

export const generateToken = (credentials: AuthInterface) => {
  const jwt = sign(credentials, secretJWT as Secret, { expiresIn: "1h" })

  return jwt
}

export const compareToken = (token: string) => {
  const response = verify(token, secretJWT as Secret)
  return response
}



