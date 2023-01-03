import taskModel from "../models/task"
import { TaskInterface, FiltersGetAll } from "../interfaces/taskInterface"

export const insertTask = async (item: TaskInterface) => {
  const responseInsert = await taskModel.create(item)
  responseInsert.set("idUser", undefined)
  return responseInsert
}

export const getAllTasks = async (idUser: string, filters: FiltersGetAll) => {
  const query = {
    ...filters,
    idUser,
    body: { $regex: filters.body ?? "" },
  }
  const paginateOptions = {
    page: 1,
    limit: 10
  }
  const responseItem = await taskModel.paginate(query,paginateOptions)
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
