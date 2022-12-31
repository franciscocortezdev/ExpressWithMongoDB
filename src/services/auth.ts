import userModel from "../models/user";
import { UserInterface } from "../interfaces/userInterface";


export const userLogin = async (email: string) => {
  const responseItem = await userModel.findOne({email})
  return responseItem
}


export const userRegister = async (user: UserInterface) => {
  const responseInsert = await userModel.create(user);
  responseInsert.set("password", undefined)
  return responseInsert;
};




 