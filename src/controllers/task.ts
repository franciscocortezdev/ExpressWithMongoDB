import { Request, Response } from "express"

export const getTasks = (req: Request, res: Response) => {
  res.send({data: 'get Tasks'})
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

