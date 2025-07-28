
import { Server } from "socket.io";

import { createServer } from "node:http"

const wsPort = process.env.PORTWS
const startWsServer = () => {

    const httpServer = createServer()

    const wsServer = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    })
    wsServer.on("connection", (socket) => {
        console.log(`New User connected`);

        socket.emit("welcome", "Hello and Welcome to the chat!")

        socket.on('message', (msg) => {
            console.log(`Message received: ${msg}`);
            socket.emit("reply", "Message received")
        })

        socket.on("disconnect", () => {
            console.log("User disconnected");

        })
    })

    httpServer.listen(wsPort, () => {
        console.log(`Websocket is running on ${wsPort} port`);
    })
}

export default startWsServer;