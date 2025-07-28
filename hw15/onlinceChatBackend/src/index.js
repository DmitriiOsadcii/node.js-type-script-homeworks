import "dotenv/config"

import startServer from './server.js'
import startWsServer from "./wsServer.js";

const bootStrap = async () => {
    startServer();
    startWsServer()
}

bootStrap()