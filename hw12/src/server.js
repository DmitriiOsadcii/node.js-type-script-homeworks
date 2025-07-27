import express from "express"
import cors from "cors"
import errorHandler from "./middlewares/errorHandler.js"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import productRouter from "./routers/product-router.js"
const startServer = () => {

    const app = express()

    app.use(cors())
    app.use(express.json())

    app.use('/api/products', productRouter)

    app.use(notFoundHandler)
    app.use(errorHandler)

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on ${port} port`);
    })

}
export default startServer;