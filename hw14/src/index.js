import "dotenv/config"
import startServer from "./server.js"
import connectDatabase from "./db/connectDatabase.js"

const bootStrap = async () => {

    await connectDatabase()
    startServer()
}

bootStrap()