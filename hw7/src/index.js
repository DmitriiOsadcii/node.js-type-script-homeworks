import "dotenv/config"
import { connectDatabase } from "./db/sequelize.js"
import startServer from "./server.js"

const bootStrap = async () => {
    await connectDatabase()
    startServer()
}

bootStrap()