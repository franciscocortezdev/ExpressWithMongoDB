import mongoose from "mongoose";

export interface TaskInterface{
  body: string,
  done: boolean,
  idUser: mongoose.Types.ObjectId
}

export interface FiltersGetAll{
  body?: string,
  done?: boolean
}