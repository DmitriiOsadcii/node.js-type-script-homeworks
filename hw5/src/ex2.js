import http from "http"
import * as fs from "fs/promises"

const server = http.createServer(async (req, res) => {
    try {
        throw new Error(`Что то пошло не так !`)
    } catch (error) {
        const errorMessage = `${new Date()} ${error.message}`

       await fs.appendFile('errors.log', errorMessage)

        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end(`Internal Server Error`)
    }
})

const port = 3000

server.listen(port, () => {
    console.log(`Server is running on  ${port} port`);
})