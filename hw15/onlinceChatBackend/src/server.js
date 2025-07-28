import express from "express"
import cors from "cors"
import * as path from "node:path"

const port = process.env.PORT
const publicDir = path.resolve("public")

const startServer = () => {

    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.static(publicDir))

    app.listen(port, () => {
        console.log(`Server is running on ${port} port`);
    })
}
export default startServer