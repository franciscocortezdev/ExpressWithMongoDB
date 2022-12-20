import mongoose from "mongoose";

export interface AuthInterface{
  email: string;
  password: string;
  _id: mongoose.Types.ObjectId
}