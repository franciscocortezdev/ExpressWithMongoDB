import taskModel from "../models/task"
import { TaskInterface } from "../interfaces/taskInterface"

export const insertTask = async (item: TaskInterface) => {
  const responseInsert = await taskModel.create(item);
  return responseInsert;
};

export const getAllTasks = async () => {
  const responseItem = await taskModel.find({})
  return responseItem
}

export const getOneTasks = async (id: string) => {
  const responseItem = await taskModel.findOne({_id: id})
  return responseItem
}


export const updateOneTask = async (id: string, data: TaskInterface) => {
  const responseItem = await taskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

export const deleteOneTask = async (id: string) => {
  const responseItem = await taskModel.remove({ _id: id });
  return responseItem;
};
