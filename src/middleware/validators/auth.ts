import { NextFunction, Request, Response } from "express";
import { loginParams } from "../../interfaces/authInterface";
import { handleError } from "../../utils/handleError";
const { check, validationResult } = require('express-validator');


  
export const validateLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (error) {
      const errorsParams = error as loginParams
        handleError(res, errorsParams.errors, 403)
    }
  
  }
]

export const validateRegister = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty(),
  check("nombre").exists().notEmpty(),
  check("apellido").exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (error) {
      const errorsParams = error as loginParams
        handleError(res, errorsParams.errors, 403)
    }
  
  }
]




