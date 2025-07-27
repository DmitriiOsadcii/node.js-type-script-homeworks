import express from "express"
import cors from "cors"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/errorHandler.js"

const port = process.env.PORT
const startServer = () => {
    const app = express()
    app.use(cors())
    app.use(express.json())


    app.use(notFoundHandler)
    app.use(errorHandler)

    app.listen(port, () => {
        console.log(`Server is running on ${port} port `);
    })
}

export default startServer
