import express from "express"
import cors from "cors"
import developmentRouter from "./development-router.js"

const startServer = () => {
    const app = express()
    app.use(express.json())
    const port = 3000
    app.use(cors())

    app.use('/api/development', developmentRouter)


    app.use((req, res) => {
        res.status(404).json({ message: `${req.url} is not found` })
    })
    app.listen(port, () => {
        console.log(`Server is running on ${port} port`);

    })
}
export default startServer;
