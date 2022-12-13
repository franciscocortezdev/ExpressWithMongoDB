import taskModel from "../models/task"

export const getAllTasks = async () => {
  const responseItem = await taskModel.find({})
  return responseItem
}


