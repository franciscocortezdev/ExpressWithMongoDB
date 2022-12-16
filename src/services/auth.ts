import userModel from "../models/user";
import { UserInterface } from "../interfaces/userInterface";
import { AuthInterface } from "../interfaces/authInterface";

export const userRegister = async (user: UserInterface) => {
  const responseInsert = await userModel.create(user);
  return responseInsert;
};


export const userLogin = async ({email, password}:  AuthInterface) => {
  const responseItem = await userModel.findOne({email})
  return responseItem
}

