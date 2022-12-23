import { NextFunction, Response } from "express"
import { reqExtend } from "../interfaces/reqExtend"
import { handleError } from "../utils/handleError"
import { compareToken } from "../utils/handleJWT"
import { JwtPayload } from "jsonwebtoken";


export const authSession = (
  req: reqExtend,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtUser = req.headers.authorization
    if (!jwtUser) return handleError(res, "ERROR_ACCESS_UNAUTHORIZED", 403)
    const jwt = jwtUser.split(" ").pop()
    const jwtCorrect = compareToken(`${jwt}`)
    req.user = jwtCorrect as JwtPayload 
    next()
  } catch (error) {
    handleError(res, "SESSION_NO_VALID")
  }
}
