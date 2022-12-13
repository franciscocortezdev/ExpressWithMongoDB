import taskModel from "../models/task"
import { TaskInterface } from "../interfaces/taskInterface"

const insertCar = async (item: TaskInterface) => {
  const responseInsert = await taskModel.create(item);
  return responseInsert;
};

export const getAllTasks = async () => {
  const responseItem = await taskModel.find({})
  return responseItem
}

export const getOneTasks = async (id: number) => {
  const responseItem = await taskModel.findOne({_id: id})
  return responseItem
}


export const updateTask = async (id: string, data: TaskInterface) => {
  const responseItem = await taskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

export const deleteTask = async (id: string) => {
  const responseItem = await taskModel.remove({ _id: id });
  return responseItem;
};
