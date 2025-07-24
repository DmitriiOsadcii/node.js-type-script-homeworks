import express from "express"
import cors from "cors"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/errorHandler.js"
import userRouter from "./routers/user-router.js"
import authRouter from "./routers/auth-router.js"

const startServer = () => {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)

    app.use(notFoundHandler)
    app.use(errorHandler)

    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is running on ${port} port`);
    })
}

export default startServer;