import cors from "cors"
import express from "express"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/ErrorHandler.js"
import bookRouter from "./routers/book-router.js"


const startServer = () => {
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.use('/api/books', bookRouter);


    app.use(notFoundHandler)
    app.use(errorHandler)

    app.listen(3000, ()=>{`Server is running on 3000 Port`})
}

export default startServer;