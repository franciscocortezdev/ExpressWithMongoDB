import { Router } from "express"
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task"
import { authSession } from "../middleware/session"

const router = Router()

router.get("/",authSession, getTasks)

router.get("/:id",authSession, getTask)

router.post("/",authSession, createTask)

router.put("/:id",authSession, updateTask)

router.delete("/:id",authSession, deleteTask)

export { router }
