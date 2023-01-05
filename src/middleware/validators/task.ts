import { NextFunction, Request, Response } from "express"
import { loginParams } from "../../interfaces/authInterface"
import { handleError } from "../../utils/handleError"
import { check, validationResult } from "express-validator"

export const validateCreateTask = [
  check("body").exists().notEmpty(),
  check("done").exists().notEmpty().isBoolean(),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (error) {
      const errorsParams = error as loginParams
      handleError(res, errorsParams.errors, 403)
    }
  },
]

export const validateUpdateTask = [
  check("body").exists().notEmpty(),
  check("done").exists().notEmpty().isBoolean(),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (error) {
      const errorsParams = error as loginParams
      handleError(res, errorsParams.errors, 403)
    }
  },
]
