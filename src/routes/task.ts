import { Request, Response, Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send({data: 'get Tasks'})
})

router.get("/:id", (req: Request, res: Response) => {
  res.send("tarea seleccionada")
})

router.post("/", (req: Request, res: Response) => {
  res.send("tarea creada")
})

router.put("/:id", (req: Request, res: Response) => {
  res.send("tarea editada")
})

router.delete("/:id", (req: Request, res: Response) => {
  res.send("tarea eliminada")
})
export { router }
