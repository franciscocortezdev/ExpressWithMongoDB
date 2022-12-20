import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


export interface reqExtend extends Request{
  user?:  JwtPayload 
}