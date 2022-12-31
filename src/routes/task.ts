import { Router } from "express"
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task"
import { authSession } from "../middleware/session"
import { validateCreateTask, validateUpdateTask } from "../middleware/validators/task"

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 * 
 * 
 * /task:
 *   get:
 *     summary: Lists all the tasks
 *     tags: [Tasks]
 *     parameters:
 *           - in: query
 *             name: body
 *             schema:
 *               type: string
 *             required: false
 * 
 *           - in: query
 *             name: done
 *             required: false
 *             schema:
 *               type: boolean
 *                 
 *     responses:
 *       200:
 *         description: Get list all tasks
 *         content:
 *            application/json:
 *              schema:
 *                properties:
 *                  data:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                            body: 
 *                              type: string
 *                            done:
 *                              type: boolean
 *                              example: false
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *     security:
 *        - JWT_auth: []            
 * 
 * 
 *   post:
 *     tags: [Tasks]
 *     summary: Create a new task
 *     requestBody:
 *       description: Create a new Task
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              required:
 *                -body
 *              properties:
 *                body:
 *                    type: string
 *                    example: Task
 *     responses:
 *       200:
 *         description: The created task
 *         content:
 *            application/json:
 *              schema:
 *                properties:
 *                  data:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                        body: 
 *                          type: string
 *                        done:
 *                          type: boolean
 *                          example: false
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *       500:
 *         description: Some server error
 *     security:
 *        - JWT_auth: []       
 * 
 * 
 * /task/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task response by id
 *         content:
 *            application/json:
 *              schema:
 *                properties:
 *                  data:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                        body: 
 *                          type: string
 *                        done:
 *                          type: boolean
 *                          example: false
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *         
 *       404:
 *         description: The task was not found
 *     security:
 *        - JWT_auth: []       
 * 
 * 
 *   put:
 *    summary: Update the task by the id
 *    tags: [Tasks]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *            schema:
 *              properties:
 *                body:
 *                    type: string
 *                    example: Task
 *                done:
 *                    type: boolean
 *                    example: false
 *    responses:
 *      200:
 *        description: The book was updated        
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *    security:
 *        - JWT_auth: []      
 * 
 * 
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 *     security:
 *        - JWT_auth: []      
 */

router.get("/",authSession, getTasks)

router.get("/:id",authSession, getTask)

router.post("/",validateCreateTask ,authSession, createTask)

router.put("/:id",validateUpdateTask, authSession, updateTask)

router.delete("/:id",authSession, deleteTask)

export { router }
