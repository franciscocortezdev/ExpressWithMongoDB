import { Response } from "express"
import { reqExtend } from "../interfaces/reqExtend"
import {
  insertTask,
  getAllTasks,
  getOneTasks,
  updateOneTask,
  deleteOneTask,
} from "../services/task"
import { handleError } from "../utils/handleError"


export const createTask = async (req: reqExtend, res: Response) => {
  const {body, user} = req
  try {
    const response = await insertTask({...body, idUser: user?._id})
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_POST_TASK")
  }
}

export const getTasks = async (req: reqExtend, res: Response) => {
  const { user } = req
  const {filter} = req.query

  try {
    const response = await getAllTasks(user?._id, `${filter}`)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_GET_TASKS")
  }
}

export const getTask = async (req: reqExtend, res: Response) => {
  const { user } = req
  const {id}=req.params
  try {
    const response = await getOneTasks(id, user?._id)
    if (!response) return handleError(res, "ERROR_TASK_NOT_FOUND", 404)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_GET_TASK")
  }
}


export const updateTask = async (req: reqExtend, res: Response) => {
  const {id}=req.params
  const {body, user} = req

  try {
    const response = await updateOneTask(id, body, user?._id)
    if (!response) return handleError(res, "ERROR_TASK_NOT_FOUND", 404)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_PUT_TASK")
  }
}

export const deleteTask = async (req: reqExtend, res: Response) => {
  const { user } = req
  const {id}=req.params
  try {
    const response = await deleteOneTask(id, user?._id)
    if (!response.deletedCount) return handleError(res, "ERROR_TASK_NOT_FOUND", 404)
    res.send({ data: response })
  } catch (error) {
    handleError(res, "ERROR_DELETE_TASK")
  }
}
