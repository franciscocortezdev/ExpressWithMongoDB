import userModel from "../models/user";
import { UserInterface } from "../interfaces/userInterface";

export const userRegister = async (user: UserInterface) => {
  const responseInsert = await userModel.create(user);
  return responseInsert;
};
