import { Router } from "express"
import { loginUser, registerUser } from "../controllers/auth"

const router = Router()

/**
 * @swagger
 * tags: 
 *  name: Auth
 * 
 *  
 * 
 * /auth/login:
 *
 *  post: 
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              email:
 *                  type: string
 *                  example: prueba11@prueba.com
 *              password: 
 *                  type: string
 *                  example: prueba11
 *    responses:
 *      201:
 *        description: User logged
 *      
 * 
 * 
 */

router.post("/register", registerUser)
router.post("/login", loginUser)


export { router }
