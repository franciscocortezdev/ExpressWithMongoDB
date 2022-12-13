import { Request, Response } from "express"
import {
  insertTask,
  getAllTasks,
  getOneTasks,
  updateOneTask,
  deleteOneTask,
} from "../services/task"
import { handleError } from "../utils/handleError"


export const createTask = async (req: Request, res: Response) => {
  const {body} = req
  try {
    const response = await insertTask(body)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_POST_TASK")
  }
}

export const getTasks = async (req: Request, res: Response) => {
  try {
    const response = await getAllTasks()
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_GET_TASKS")
  }
}

export const getTask = async (req: Request, res: Response) => {
  const {id}=req.params
  try {
    const response = await getOneTasks(id)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_GET_TASK")
  }
}


export const updateTask = async (req: Request, res: Response) => {
  const {id}=req.params
  const {body} = req

  try {
    const response = await updateOneTask(id, body)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_PUT_TASK")
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  const {id}=req.params
  try {
    const response = await deleteOneTask(id)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_DELETE_TASK")
  }
}
