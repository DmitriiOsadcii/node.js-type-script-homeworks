import "dotenv/config"
import startServer from "./server.js";
import { connectDatabase } from "./db/sequelize.js";


const bootStrap = async () => {
    await connectDatabase()
    startServer()
}

bootStrap()