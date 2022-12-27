import taskModel from "../models/task"
import { TaskInterface } from "../interfaces/taskInterface"

export const insertTask = async (item: TaskInterface) => {
  const responseInsert = await taskModel.create(item)
  responseInsert.set("idUser", undefined)
  return responseInsert
}

export const getAllTasks = async (idUser: string, filter: string ) => {
  console.log(filter)
 
  const responseItem = await taskModel.find({ idUser, body: { $regex: filter === 'undefined'? '' : filter }})
  return responseItem
}

export const getOneTasks = async (id: string, idUser: string) => {
  const responseItem = await taskModel.findOne({ _id: id, idUser })
  return responseItem
}

export const updateOneTask = async (
  id: string,
  data: TaskInterface,
  idUser: string
) => {
  const responseItem = await taskModel.findOneAndUpdate(
    { _id: id, idUser },
    data,
    {
      new: true,
    }
  )
  return responseItem
}

export const deleteOneTask = async (id: string, idUser: string) => {
  const responseItem = await taskModel.deleteOne({ _id: id, idUser })
  return responseItem
}
