import cors from "cors"
import express, { Express, Request, Response } from "express"


const startServer = (): void => {
    const app: Express = express()

    app.use(cors())
    app.use(express.json())

    app.get("/", (req: Request, res: Response): void => {
        res.json({ message: "Here is mu server on Typescript" })
    })
    app.post("/", (req: Request, res: Response): void => {
        if (!req.body) {
            res.status(400).json({ message: `Need to insert data` })
        }
        res.status(201).json(req.body)
    })


    const port: number = Number(process.env.PORT) || 3000;
    app.listen(port, () => {
        console.log(`Server is connected on ${port} port`);

    })
}

export default startServer