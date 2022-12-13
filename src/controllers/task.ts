import { Request, Response } from "express"
import { getAllTasks } from "../services/task"
import { handleError } from "../utils/handleError"

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = getAllTasks()
    res.send({data: tasks})
  } catch (error) {
    handleError(res, 'ERROR_GET_TASKS')
  }
  
}

export const getTask = (req: Request, res: Response) => {
  res.send("tarea seleccionada")
}

export const createTask = (req: Request, res: Response) => {
  res.send("tarea creada")
}

export const updateTask = (req: Request, res: Response) => {
  res.send("tarea editada")
}

export const deleteTask = (req: Request, res: Response) => {
  res.send("tarea eliminada")
}

