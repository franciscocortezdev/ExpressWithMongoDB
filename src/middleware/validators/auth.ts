import { NextFunction, Request, Response } from "express";
import { loginParams } from "../../interfaces/authInterface";
import { handleError } from "../../utils/handleError";
const { check, validationResult } = require('express-validator');


  
export const validateLogin = [
  check("email").exists().notEmpty(),
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



