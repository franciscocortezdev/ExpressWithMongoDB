import userModel from "../models/user";
import { UserInterface } from "../interfaces/userInterface";

export const userRegister = async (user: UserInterface) => {
  const responseInsert = await userModel.create(user);
  return responseInsert;
};


export const userLogin = async (id: string) => {
  const responseItem = await userModel.findOne({_id: id})
  return responseItem
}

