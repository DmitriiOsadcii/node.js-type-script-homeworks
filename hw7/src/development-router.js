import { Router } from "express";
import Development from "./db/Development.js";
import { developmentAddSchema } from "./validation/validation.js";

const developmentRouter = Router()

developmentRouter.get('/', (req, res) => {
    const result = Development.findAll()
    res.status(200).json(result)
})

developmentRouter.post("/", async (req, res) => {
    try {
        await developmentAddSchema.validate(req.body)
        const result = await Development.create(req.body)
        res.status(200).json(`Product successfully added`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default developmentRouter